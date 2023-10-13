import { axiosClient } from "@/lib/axiosClient";
import { BookListFilter, BookListResponse } from "../interface";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useBookModule = () => {
  const defaultParams = {
    page: 1,
    pageSize: 10,
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
    let [params, setParams] = useState<BookListFilter>(defaultParams);
    let [filterParams, setFilterParams] =
      useState<BookListFilter>(defaultParams);

    const handlePage = (page: number) => {
      setParams((params) => ({ ...params, page: page }));
      setFilterParams((params) => ({ ...params, page: page }));
    };

    const { data, isFetching, isLoading } = useQuery(
      ["/book/list", [filterParams]],
      () => getBookList(filterParams),
      {
        select: (response: any) => response,
      }
    );

    return { data, isFetching, isLoading, params, handlePage };
  };

  return { useBookList };
};

export default useBookModule;
