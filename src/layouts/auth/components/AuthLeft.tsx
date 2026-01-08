import { motion } from 'motion/react'

const AuthLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='hidden lg:flex lg:col-span-3 flex-col justify-center pr-20'
    >
      <h1 className='text-4xl font-bold text-gray-800'>
        Shop<span className='text-primary_orange'>pe</span>
      </h1>

      <p className='mt-6 text-xl text-gray-700 leading-relaxed'>
        Nền tảng mua sắm hiện đại, nhanh hơn – thông minh hơn – tiết kiệm hơn.
      </p>

      <ul className='mt-8 space-y-4'>
        <li className='flex items-center gap-3 text-gray-600'>
          <span className='w-2 h-2 rounded-full bg-primary_orange' />
          Ưu đãi độc quyền cho thành viên mới
        </li>
        <li className='flex items-center gap-3 text-gray-600'>
          <span className='w-2 h-2 rounded-full bg-primary_orange' />
          Theo dõi đơn hàng theo thời gian thực
        </li>
        <li className='flex items-center gap-3 text-gray-600'>
          <span className='w-2 h-2 rounded-full bg-primary_orange' />
          Thanh toán an toàn – bảo mật tuyệt đối
        </li>
      </ul>

      <div className='mt-12 flex items-center gap-6 text-sm text-gray-500'>
        <div>🔒 Bảo mật</div>
        <div>🚚 Giao nhanh</div>
        <div>⭐ 10K+ khách hàng</div>
      </div>
    </motion.div>
  )
}

export default AuthLeft
