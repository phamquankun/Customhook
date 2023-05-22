import { AuthReponse, BaseRequestQueryParam, HttpResponse } from "../models";
import axiosClient, { handleRequest } from "./axiosClient";

export const authApi = {
  getUsers(params?: BaseRequestQueryParam): Promise<HttpResponse<AuthReponse>> {
    const url = `/users1s`;
    return handleRequest(axiosClient.get(url, { params }));
  },
};
