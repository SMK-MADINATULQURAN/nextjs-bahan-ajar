import axios, { AxiosInstance } from "axios";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:5002",
  headers: { "Content-Type": "application/json" },
});


export const axiosClientRefresh: AxiosInstance = axios.create({
  baseURL: "http://localhost:5002",
  headers: { "Content-Type": "application/json" },
});

export interface BaseResponseSuccess {
  status: string;
  message: string;
  data: any[] | any;
}

export interface BaseResponsePagination {
  status: string;
  message: string;
  data: any[];
  pagination: {
    page: number;
    total_page: number;
    pageSize: number;
    total: number;
  };
}

export interface BasePayloadPagination {
  page: number;
  pageSize: number;
}
