import { axiosClient } from "@/lib/axiosClient";
import { BookListFilter, BookListResponse } from "../interface";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";

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

    const handlePageSize = (e: ChangeEvent<any>) => {
      console.log('event', e.target.value)
      setParams((params) => ({ ...params, pageSize: e.target.value }));
      setFilterParams((params) => ({ ...params, pageSize: e.target.value }));
    };
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

    return { data, isFetching, isLoading, params, handlePage, handlePageSize };
  };

  return { useBookList };
};

export default useBookModule;
