import { motion } from 'motion/react'
import AuthLeft from '../../../layouts/auth/components/AuthLeft'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, type RegisterSchema } from '../../../schema-validation/auth-schema'
import Input from '../../../components/Input'
import { omit } from 'lodash'
import { useRegisterMutation } from '../../../hooks/useAuth'
import { isAxiosUnprocessableEntityError } from '../../../utils/utils'
import type { IRessponseError } from '../../../types/utils'

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerSchema)
  })
  const navigate = useNavigate()
  const registerMutation = useRegisterMutation()
  const onSubmit = async (data: RegisterSchema) => {
    const payload = omit(data, ['confirmPassword'])
    if (registerMutation.isPending) return
    try {
      const res = await registerMutation.mutateAsync(payload)
      const { data: user } = res.data
      if (user) {
        navigate('/login')
      }
    } catch (error) {
      if (isAxiosUnprocessableEntityError<IRessponseError<Omit<RegisterSchema, 'confirmPassword'>>>(error)) {
        const formError = error.response?.data.data
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key as keyof Omit<RegisterSchema, 'confirmPassword'>, {
              message: formError[key as keyof Omit<RegisterSchema, 'confirmPassword'>],
              type: 'Server'
            })
          })
        }
      }
    }
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-200 to-primary_orange flex items-center'>
      <div className='max-w-7xl mx-auto w-full px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5'>
          <AuthLeft />
          <div className='lg:col-span-2 lg:col-start-4'>
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className='bg-white rounded-2xl shadow-xl p-10'
            >
              {/* Header */}
              <div className='mb-8'>
                <h2 className='text-3xl font-semibold text-gray-800'>Tạo tài khoản</h2>
                <p className='text-sm text-gray-500 mt-2'>
                  Tham gia để nhận ưu đãi độc quyền và trải nghiệm mua sắm tốt hơn
                </p>
              </div>

              <Input
                classNameWrap='mb-5'
                labelTitle='Email:'
                classNameInput='w-full rounded-lg border border-gray-300 px-4 py-3
                  focus:border-orange-500 focus:ring-2 focus:ring-orange-200
                  outline-none transition'
                type='email'
                name='email'
                register={register}
                errorMessage={errors.email?.message}
                placeHolder='you@example.com'
              />
              <Input
                classNameWrap='mb-5'
                labelTitle='Mật khẩu:'
                classNameInput='w-full rounded-lg border border-gray-300 px-4 py-3
                  focus:border-orange-500 focus:ring-2 focus:ring-orange-200
                  outline-none transition'
                type='password'
                name='password'
                register={register}
                errorMessage={errors.password?.message}
                placeHolder='Ít nhất 8 ký tự'
              />
              <Input
                classNameWrap='mb-5'
                labelTitle='Xác nhận mật khẩu:'
                classNameInput='w-full rounded-lg border border-gray-300 px-4 py-3
                  focus:border-orange-500 focus:ring-2 focus:ring-orange-200
                  outline-none transition'
                type='password'
                name='confirmPassword'
                register={register}
                errorMessage={errors.confirmPassword?.message}
                placeHolder='Nhập lại mật khẩu'
              />

              {/* Button */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                disabled={registerMutation.isPending}
                type='submit'
                className='w-full bg-primary_orange text-white py-3 rounded-lg
                font-medium shadow-md hover:shadow-lg transition'
              >
                Đăng ký
              </motion.button>

              {/* Footer */}
              <p className='text-center text-sm text-gray-500 mt-6'>
                Chưa có tài khoản?
                <Link to={'/login'} className='text-orange-600 hover:underline cursor-pointer'>
                  Đăng nhập
                </Link>
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
