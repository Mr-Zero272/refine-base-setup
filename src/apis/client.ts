import { NEXT_PUBLIC_API_URL } from "@config";
import { directusAuthHelper } from "@libs";
import axios, { AxiosInstance } from "axios";

export class ApiClient {
  protected client: AxiosInstance;

  constructor(resource: string) {
    const baseURL =
      typeof window === "undefined"
        ? NEXT_PUBLIC_API_URL
        : `${window.location.origin}/api`;

    this.client = axios.create({
      baseURL: `${baseURL}/${resource}`,
    });

    this.client.interceptors.request.use(async (config) => {
      const token = await directusAuthHelper.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.client.interceptors.response.use(
      (res) => res.data,
      (error) => Promise.reject(error.response?.data || error)
    );
  }
}
