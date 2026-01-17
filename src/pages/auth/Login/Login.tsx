import { Link, useNavigate } from 'react-router-dom'
import AuthLeft from '../../../layouts/auth/components/AuthLeft'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { loginSchema, type LoginSchema } from '../../../schema-validation/auth-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../../../components/Input'
import { useLoginMutation } from '../../../hooks/useAuth'
import { isAxiosUnprocessableEntityError } from '../../../utils/utils'
import type { IRessponseError } from '../../../types/utils'
import Button from '../../../components/Button'
import Spinner from '../../../components/Spinner'
const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  })
  const navigate = useNavigate()
  const loginMutation = useLoginMutation()
  const onSubmit = async (payload: LoginSchema) => {
    if (loginMutation.isPending) return
    try {
      const res = await loginMutation.mutateAsync(payload)
      const { data: user } = res.data
      if (user) {
        navigate('/')
      }
    } catch (error) {
      if (isAxiosUnprocessableEntityError<IRessponseError<LoginSchema>>(error)) {
        const formError = error.response?.data.data
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key as keyof LoginSchema, {
              message: formError[key as keyof LoginSchema],
              type: 'Server'
            })
          })
        }
      }
    }
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-200 to-primary_orange flex items-center'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-16'>
          <AuthLeft />
          <div className='lg:col-span-2 lg:col-start-4'>
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: 0
              }}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='bg-white shadow-xl border rounded-2xl p-10'
            >
              {/* Header */}
              <div className='mb-8'>
                <h2 className='text-3xl font-semibold text-gray-800'>Đăng nhập</h2>
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
              <Button
                type='submit'
                isPending={loginMutation.isPending}
                disabled={loginMutation.isPending}
                className='w-full bg-primary_orange text-white py-3 rounded-lg
                font-medium shadow-md hover:shadow-lg transition flex items-center justify-center'
                icon={<Spinner />}
              >
                Đăng nhập
              </Button>
              <p className='text-center text-sm text-gray-500 mt-6'>
                Đã có tài khoản?{' '}
                <Link to={'/register'} className='text-orange-600 hover:underline cursor-pointer'>
                  Đăng ký
                </Link>
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
