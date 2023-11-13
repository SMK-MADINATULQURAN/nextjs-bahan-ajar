import { axiosClient } from "@/lib/axiosClient";
import {
  BookCreatePayload,
  BookCreateResponse,
  BookDetailResponse,
  BookListFilter,
  BookListResponse,
  BookUpdatePayload,
  BookUpdateResponse,
} from "../interface";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { usePagination } from "@/hook/usePagination";
import Swal from "sweetalert2";

const useBookModule = () => {
  const defaultParams = {
    page: 1,
    pageSize: 10,
    title: "",
    author: "",
    from_year: "",
    to_year: "",
  };
  const getBookList = async (
    params: BookListFilter
  ): Promise<BookListResponse> => {
    return axiosClient
      .get("/book/list", {
        params: params,
      })
      .then((res) => {
        console.log("res", res);
        return res.data;
      });
  };

  const useBookList = () => {
    const {
      params,
      setParams,
      handleFilter,
      handleClear,
      handlePageSize,
      handlePage,
      filterParams,
    } = usePagination(defaultParams);

    const { data, isFetching, isLoading } = useQuery(
      ["/book/list", [filterParams]],
      () => getBookList(filterParams),
      {
        select: (response: any) => response,
      }
    );

    return {
      data,
      isFetching,
      filterParams,
      isLoading,
      params,
      setParams,
      handlePage,
      handlePageSize,
      handleFilter,
      handleClear,
    };
  };

  const createBook = (
    payload: BookCreatePayload
  ): Promise<BookCreateResponse> => {
    return axiosClient.post(`/book/create`, payload).then((res) => res.data);
  };

  const useCreateBook = () => {
    const { isLoading, mutate } = useMutation(
      (payload: BookCreatePayload) => createBook(payload),
      {
        onSuccess: (response) => {
          console.log("res", response);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.message,
            showConfirmButton: false,
            timer: 1500,
          });
        },
        onError: (err) => {
          console.log("err", err);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Ada Kesalahan",
            showConfirmButton: false,
            timer: 1500,
          });
        },
      }
    );

    return { mutate, isLoading };
  };

  //update

  const updateBook = (
    payload: BookUpdatePayload,
    id : number
  ): Promise<BookUpdateResponse> => {
    return axiosClient.put(`/book/update/${id}`, payload).then((res) => res.data);
  };

  const useUpdateBook = (id:number) => {
    const { isLoading, mutate } = useMutation(
      (payload: BookCreatePayload) => updateBook(payload, id),
      {
        onSuccess: (response) => {
          console.log("res", response);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.message,
            showConfirmButton: false,
            timer: 1500,
          });
        },
        onError: (err) => {
          console.log("err", err);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Ada Kesalahan",
            showConfirmButton: false,
            timer: 1500,
          });
        },
      }
    );

    return { mutate, isLoading };
  };

  //update

  const getDetailBook = async (id: string): Promise<BookDetailResponse> => {
    return axiosClient.get(`/book/detail/${id}`).then((res) => res.data.data);
  };

  const useDetailBook = (id: string) => {
    const { data, isLoading, isFetching } = useQuery(
      ["/book/detail", { id }],
      () => getDetailBook(id),
      {
        select: (response) => response,
      }
    );

    return { data, isFetching, isLoading };
  };

  return { useBookList, useCreateBook, useDetailBook, useUpdateBook };
};

export default useBookModule;
