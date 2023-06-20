import axios from "axios";
import env from "@/config/env";

export const baseURL = env.BASE_URL;

export default axios.create({
  baseURL,
});

export const axiosPrivate = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  // withCredentials: true,
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const token = await axiosPrivate.post("refresh");
      axiosPrivate.defaults.headers.common.Authorization = `Bearer ${token.data.accessToken}`;
      return axiosPrivate(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const axiosJwt = axios.create({ baseURL });
