import type { AuthResponse } from '../types/auth'
import type { IRessponseSuccess } from '../types/utils'
import http from '../utils/axios'

export const auth = {
  register: (data: { email: string; password: string }) => {
    return http.post<IRessponseSuccess<AuthResponse>>('register', data)
  },
  login: (data: { email: string; password: string }) => {
    return http.post<IRessponseSuccess<AuthResponse>>('login', data)
  },
  logout: () => {
    return http.post('/logout')
  }
}
