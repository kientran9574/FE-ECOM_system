import { useMutation } from '@tanstack/react-query'
import { auth } from '../apis/auth'
import toast from 'react-hot-toast'
import { isAxiosUnprocessableEntityError } from '../utils/utils'
export const useRegisterMutation = () => {
  return useMutation({
    mutationKey: ['register'],
    mutationFn: auth.register,
    onSuccess: (res) => {
      const { message } = res.data
      toast.success(message || 'Đăng ký thành công')
    },
    onError: (error) => {
      if (!isAxiosUnprocessableEntityError(error)) {
        toast.error('Có lỗi xảy ra!')
      }
    }
  })
}

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: auth.login,
    onSuccess: (res) => {
      const { message } = res.data
      toast.success(message || 'Đăng nhập thành công')
    },
    onError: (error) => {
      if (!isAxiosUnprocessableEntityError(error)) {
        toast.error('Có lỗi xảy ra!')
      }
    }
  })
}
