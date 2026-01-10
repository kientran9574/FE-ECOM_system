import { useMutation } from '@tanstack/react-query'
import { auth } from '../apis/auth'
import toast from 'react-hot-toast'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
export const useRegisterMutation = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationKey: ['register'],
    mutationFn: auth.register,
    onSuccess: (data) => {
      if (data.data.data) {
        navigate('/login')
        toast.success(data.data.message)
      }
      return false
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        return toast.error(error.response?.data.message || 'Đăng ký thất bại')
      }
    }
  })
}
