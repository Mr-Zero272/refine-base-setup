import axios, { AxiosInstance } from "axios";

export interface IHereMapOptions {
  apiKey: string;
}

export class HereMapClient {
  private client: AxiosInstance;

  constructor(private options: IHereMapOptions) {
    this.client = axios.create({});
    this.client.interceptors.request.use((config) => {
      config.params.apiKey = this.options.apiKey;
      return config;
    });
  }

  async geocode(params: any) {
    return this.client.get("https://geocode.search.hereapi.com/v1/geocode", {
      params,
    });
  }

  async reverseGeocode(params: any) {
    return this.client.get(
      "https://revgeocode.search.hereapi.com/v1/revgeocode",
      {
        params,
      }
    );
  }

  async autosuggest(params: any) {
    return this.client.get(
      "https://autosuggest.search.hereapi.com/v1/autosuggest",
      { params }
    );
  }
}
