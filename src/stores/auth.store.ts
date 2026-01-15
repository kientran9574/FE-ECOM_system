import { create } from 'zustand'
import { getAccessTokenToLS } from '../utils/utils'

interface IAuthStore {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

export const useAuthStore = create<IAuthStore>((set) => {
  return {
    isAuthenticated: Boolean(getAccessTokenToLS()),
    setIsAuthenticated: (value) => set({ isAuthenticated: value })
  }
})
