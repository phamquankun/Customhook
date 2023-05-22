import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BadRequestFieldError, HttpResponse } from "../models";
import { isEmptyObject } from "../utils";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_GATEWAY_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    const data: HttpResponse<any> = {
      status: response.status,
      ok: true,
      body: response.data,
    };
    return data;
  },

  function ({ response }) {
    const { status, data } = response;
    const error: HttpResponse<any> = {
      status,
      ok: false,
      error: {
        unauthorized: status === 401,
        badRequest: status === 400,
        notFound: status === 404,
        clientError: status >= 400 && status <= 499,
        serverError: status >= 500 && status <= 599,
        message: data.messageCode,
        errors: data.errors,
      },
    };
    return Promise.reject(error);
  }
);

export const handleRequest = (promise: Promise<any>) => {
  return promise
    .then((res: any) => res as HttpResponse<any>)
    .catch((err: any) => err as HttpResponse<any>);
};

export default axiosClient;
