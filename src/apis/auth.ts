import type { AuthResponse } from '../types/auth'
import http from '../utils/axios'

export const auth = {
  register: (data: { email: string; password: string }) => {
    return http.post<AuthResponse>('register', data)
  }
}
