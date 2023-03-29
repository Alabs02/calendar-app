import NProgress from 'nprogress';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface IParams {
  [key: string]: any;
}

export interface IGetOptions {
  url: string;
  params?: IParams;
}

export interface IPushOptions extends IGetOptions {
  payload?: any;
  hasAttachment?: boolean;
}

export interface IRemoveOptions extends IGetOptions {};

export interface IErrorResponse {
  code: string;
  message: string;
}

const isDevMode: boolean = process.env.NODE_ENV === 'development';

export class ApiClient {
  private axiosClient: AxiosInstance;

  public constructor() {
    this.axiosClient = axios.create({
      withCredentials: false,
      headers: this.setupHeaders()
    });
  }

  private setupHeaders(hasAttachment = false) {
    return hasAttachment
      ? { 'Content-Type': 'multipart/form-data' }
      : { 'Content-Type': 'application/json' };
  }

  public service() {
    this.injectInterceptor();
    return this;
  }

  public prependBaseURL(baseUrl: string) {
    this.axiosClient.defaults.baseURL = baseUrl;
    return this;
  }

  public async get<T>(options: IGetOptions): Promise<T> {
    try {
      const response = await this.axiosClient.request<T>({
        method: 'get',
        url: options.url,
        params: options.params,
      });

      return response.data;
    } catch (error) {
      return Promise.reject(this.normalizeError(error));
    }
  }

  public async push<T>(options: IPushOptions): Promise<T> {
    try {
      const response = await this.axiosClient.request<T>({
        method: 'post',
        url: options.url,
        params: options.params,
        data: options.payload
      });

      return response.data;
    } catch (error) {
      return Promise.reject(this.normalizeError(error));
    }
  }

  public async update<T>(options: IPushOptions): Promise<T> {
    try {
      const response = await this.axiosClient.request<T>({
        method: 'put',
        url: options.url,
        params: options.params,
        data: options.payload
      });

      return response.data;
    } catch (error) {
      return Promise.reject(this.normalizeError(error));
    }
  }

  public async remove<T>(options: IRemoveOptions): Promise<T> {
    try {
      const response = await this.axiosClient.request<T>({
        method: 'delete',
        url: options.url,
        params: options.params,
      });

      return response.data;
    } catch (error) {
      return Promise.reject(this.normalizeError(error));
    }
  }


  private injectInterceptor<T>() {
    this.axiosClient.interceptors.request.use((config) => {
      NProgress.start();
      NProgress.inc(0.4);

      return config;
    });

    this.axiosClient.interceptors.response.use((response: AxiosResponse<T>) => {
      NProgress.done();

      return response;
    });

    async (error: any) => {
      NProgress.done();

      return Promise.reject(error);
    };
  }

  public normalizeError(err: any) {
    NProgress.done();

    console.error({ err });

    return err?.response;
  }

  public isSuccessful(response: any): boolean {
    const codes = [200, 201, 202, 204];
    return codes.includes(
      response?.status || response?.statusCode || response?.code,
    )
      ? true
      : false;
  }
}
