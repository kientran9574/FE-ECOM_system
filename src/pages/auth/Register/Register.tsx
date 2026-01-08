import { motion } from 'motion/react'
import AuthLeft from '../../../layouts/auth/components/AuthLeft'

const Register = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-100 to-primary_orange flex items-center'>
      <div className='max-w-7xl mx-auto w-full px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5'>
          <AuthLeft />
          <div className='lg:col-span-2 lg:col-start-4'>
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='bg-white rounded-2xl shadow-xl p-10'
            >
              {/* Header */}
              <div className='mb-8'>
                <h2 className='text-3xl font-semibold text-gray-800'>Tạo tài khoản</h2>
                <p className='text-sm text-gray-500 mt-2'>
                  Tham gia để nhận ưu đãi độc quyền và trải nghiệm mua sắm tốt hơn
                </p>
              </div>

              {/* Email */}
              <div className='mb-5'>
                <label className='block text-sm font-medium text-gray-600 mb-1'>Email</label>
                <input
                  type='email'
                  className='w-full rounded-lg border border-gray-300 px-4 py-3
                  focus:border-orange-500 focus:ring-2 focus:ring-orange-200
                  outline-none transition'
                  placeholder='you@example.com'
                />
                <p className='text-red-500 text-sm mt-1 min-h-[1rem]' />
              </div>

              {/* Password */}
              <div className='mb-5'>
                <label className='block text-sm font-medium text-gray-600 mb-1'>Mật khẩu</label>
                <input
                  type='password'
                  className='w-full rounded-lg border border-gray-300 px-4 py-3
                  focus:border-orange-500 focus:ring-2 focus:ring-orange-200
                  outline-none transition'
                  placeholder='Ít nhất 8 ký tự'
                />
                <p className='text-red-500 text-sm mt-1 min-h-[1rem]' />
              </div>

              {/* Confirm Password */}
              <div className='mb-8'>
                <label className='block text-sm font-medium text-gray-600 mb-1'>Xác nhận mật khẩu</label>
                <input
                  type='password'
                  className='w-full rounded-lg border border-gray-300 px-4 py-3
                  focus:border-orange-500 focus:ring-2 focus:ring-orange-200
                  outline-none transition'
                />
                <p className='text-red-500 text-sm mt-1 min-h-[1rem]' />
              </div>

              {/* Button */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                className='w-full bg-primary_orange text-white py-3 rounded-lg
                font-medium shadow-md hover:shadow-lg transition'
              >
                Đăng ký
              </motion.button>

              {/* Footer */}
              <p className='text-center text-sm text-gray-500 mt-6'>
                Đã có tài khoản? <span className='text-orange-600 hover:underline cursor-pointer'>Đăng nhập</span>
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
