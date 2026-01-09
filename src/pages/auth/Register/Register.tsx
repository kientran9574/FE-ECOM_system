import { motion } from 'motion/react'
import AuthLeft from '../../../layouts/auth/components/AuthLeft'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, type RegisterSchema } from '../../../schema-validation/auth-schema'
import Input from '../../../components/Input'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerSchema)
  })
  const onSubmit = (data: RegisterSchema) => {
    console.log('data', data)
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
