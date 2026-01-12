import type { AxiosError } from 'axios'
import axios from 'axios'

export const isAxiosError = <T>(err: unknown): err is AxiosError<T> => {
  return axios.isAxiosError(err);
}
export const isAxiosUnprocessableEntityError = <FormData>(err: unknown): err is AxiosError<FormData> => {
  return isAxiosError(err) && err.response?.status === 422
}
