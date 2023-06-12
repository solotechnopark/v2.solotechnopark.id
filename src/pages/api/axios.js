import axios from "axios";
import env from "@/config/env";

export const baseURL = env.BASE_URL;

export default axios.create({
  baseURL,
});

export const axiosPrivate = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const axiosJwt = axios.create({ baseURL });
