import axios, { AxiosInstance } from "axios";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:5002",
  headers: { "Content-Type": "application/json" },
});


