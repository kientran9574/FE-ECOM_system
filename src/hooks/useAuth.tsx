import { useMutation } from '@tanstack/react-query'
import { auth } from '../apis/auth'
import toast from 'react-hot-toast'
import { isAxiosUnprocessableEntityError, removeTokenToLS } from '../utils/utils'
import { useAuthStore } from '../stores/auth.store'
export const useRegisterMutation = () => {
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated)
  return useMutation({
    mutationKey: ['register'],
    mutationFn: auth.register,
    onSuccess: (res) => {
      const { message } = res.data
      toast.success(message || 'Đăng ký thành công')
      setIsAuthenticated(true)
    },
    onError: (error) => {
      if (!isAxiosUnprocessableEntityError(error)) {
        toast.error('Có lỗi xảy ra!')
      }
    }
  })
}

export const useLoginMutation = () => {
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated)
  return useMutation({
    mutationKey: ['login'],
    mutationFn: auth.login,
    onSuccess: (res) => {
      const { message } = res.data
      toast.success(message || 'Đăng nhập thành công')
      setIsAuthenticated(true)
    },
    onError: (error) => {
      if (!isAxiosUnprocessableEntityError(error)) {
        toast.error('Có lỗi xảy ra!')
      }
    }
  })
}

export const useLogoutMutation = () => {
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated)
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: auth.logout,
    onSuccess: (res) => {
      const { message } = res.data
      toast.success(message || 'Đăng xuất thành công')
      setIsAuthenticated(false)
      removeTokenToLS()
    },
    onError: (error) => {
      if (!isAxiosUnprocessableEntityError(error)) {
        toast.error('Có lỗi xảy ra!')
      }
    }
  })
}
