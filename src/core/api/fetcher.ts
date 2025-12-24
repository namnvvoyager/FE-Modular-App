import axios from "axios";

export const fetcher = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

fetcher.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);
