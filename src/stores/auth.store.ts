import { create } from 'zustand'
import { getAccessTokenToLS, getInfoUserToLS } from '../utils/utils'
import type { User } from '../types/user'

interface IAuthStore {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
  user: User | null
  setUser: (user: User) => void
}

export const useAuthStore = create<IAuthStore>((set) => {
  return {
    isAuthenticated: Boolean(getAccessTokenToLS()),
    setIsAuthenticated: (value) => set({ isAuthenticated: value }),
    user: getInfoUserToLS(),
    setUser: (user) => set({ user })
  }
})
