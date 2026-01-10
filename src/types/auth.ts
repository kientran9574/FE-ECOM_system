import type { User } from './user'
import type { IRessponseSuccess } from './utils'

export type AuthResponse = IRessponseSuccess<{
  access_token: string
  refresh_token: string
  expires: number
  expires_refresh_token: number
  user: User
}>
