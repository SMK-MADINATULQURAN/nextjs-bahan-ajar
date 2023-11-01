import { axiosClient } from "@/lib/axiosClient";
import { BookListFilter, BookListResponse } from "../interface";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { usePagination } from "@/hook/usePagination";

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

  return { useBookList };
};

export default useBookModule;
