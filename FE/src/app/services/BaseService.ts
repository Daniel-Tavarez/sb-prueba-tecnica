import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import authService from "./auth.service";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "https://localhost:7276/api";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== "undefined") {
        authService.logout();
        window.location.href = "/pages/login";
      }
    }

    return Promise.reject(error);
  }
);

const baseService = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response: AxiosResponse<T> = await instance.get(url, config);
    return response.data;
  },

  post: async <T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response: AxiosResponse<T> = await instance.post(url, data, config);
    return response.data;
  },

  put: async <T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response: AxiosResponse<T> = await instance.put(url, data, config);
    return response.data;
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response: AxiosResponse<T> = await instance.delete(url, config);
    return response.data;
  },
};

export default baseService;
