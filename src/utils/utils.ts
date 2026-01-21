import type { AxiosError } from 'axios'
import axios from 'axios'
import type { User } from '../types/user'

export const isAxiosError = <T>(err: unknown): err is AxiosError<T> => {
  return axios.isAxiosError(err)
}
export const isAxiosUnprocessableEntityError = <FormData>(err: unknown): err is AxiosError<FormData> => {
  return isAxiosError(err) && err.response?.status === 422
}

export const getAccessTokenToLS = () => {
  return localStorage.getItem('accessToken') || ''
}
export const setAccessTokenToLS = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken)
}
export const removeToLS = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('user')
}
export const getInfoUserToLS = () => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}
export const setInfoUserToLS = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user))
}
