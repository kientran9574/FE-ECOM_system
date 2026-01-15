import type { AxiosError, AxiosInstance } from 'axios'
import axios from 'axios'
import { getAccessTokenToLS, removeTokenToLS, setAccessTokenToLS } from './utils'
import type { AuthResponse } from '../types/auth'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    ;((this.accessToken = getAccessTokenToLS()),
      (this.instance = axios.create({
        baseURL: 'https://api-ecom.duthanhduoc.com/',
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json'
        }
      })))
    ;(this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = this.accessToken
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    ),
      this.instance.interceptors.response.use(
        (response) => {
          const { url } = response.config
          if (url === 'login' || url === 'register') {
            const accessToken = (response.data as AuthResponse).data?.access_token || ''
            this.accessToken = accessToken
            setAccessTokenToLS(this.accessToken)
          } else if (url === 'logout') {
            this.accessToken = ''
            removeTokenToLS()
          }
          return response
        },
        function (error: AxiosError) {
          return Promise.reject(error)
        }
      ))
  }
}
const http = new Http().instance

export default http
