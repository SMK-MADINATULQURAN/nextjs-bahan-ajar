import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@/lib/axiosClient";
import { BookListFilter, BookListResponse } from "../interface";
import { ChangeEvent, useState } from "react";

const useBookModule = () => {
  const defaultParams = {
    title: "",
    author: "",
    from_year: "",
    to_year: "",
    page: 1,
    pageSize: 10,
  };
  const getBookList = async (
    params: BookListFilter
  ): Promise<BookListResponse> => {
    return axiosClient.get("/book/list", { params }).then((res) => res.data);
  };
  const useBookList = () => {
    let [params, setParams] = useState<BookListFilter>(defaultParams);
    let [filterParams, setFilterParams] =
      useState<BookListFilter>(defaultParams);
    const handleFilter = () => {
      setFilterParams({ ...params });
    };
    const handleClear = () => {
      setFilterParams({ page: 1, pageSize: 10 });
      setParams(defaultParams);
    };

    const handlePageSize = (e: ChangeEvent<any>) => {
      setParams((params) => ({ ...params, pageSize: e.target.value }));
      setFilterParams((params) => ({ ...params, pageSize: e.target.value }));
    };
    const handlePage = (page: number) => {
      setParams((params) => ({ ...params, page: page }));
      setFilterParams((params) => ({ ...params, page: page }));
    };

    const { data, isFetching, isLoading, isError } = useQuery(
      ["/book/list", [filterParams]],
      () => getBookList(filterParams),
      {
        keepPreviousData: true,

        select: (response) => response,
      }
    );

    return {
      data,
      isFetching,
      isLoading,
      isError,
      params,
      setParams,
      handlePageSize,
      handlePage,
      handleFilter,
      handleClear,
    };
  };

  return { useBookList };
};

export default useBookModule;
