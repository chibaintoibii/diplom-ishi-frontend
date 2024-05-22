import axios, {AxiosError, AxiosInstance, AxiosResponse} from "axios";
import auth from "@/modules/auth";
import {config} from "@/config";


class httpService {
  service: AxiosInstance

  constructor() {
    const service = axios.create({
      baseURL: config.API_URL
    })
    service.interceptors.request.use((config) => {
      const token = auth.getToken()
      if (token && config && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`
      }

      return config
    })

    service.interceptors.response.use(this.handleSuccess, this.handleError)
    this.service = service
  }

  handleSuccess(response: AxiosResponse): AxiosResponse {
    return response
  }

  redirectTo = (document: Document, path: string) => {
    document.location = path
  }

  handleError = (error: AxiosError) => {
    if (error?.response?.status === 401 && !document.location.href.includes("/auth/login"))
      this.redirectTo(document, "/auth/login");
    return Promise.reject(error)
  }
}

const http = new httpService().service

export default http