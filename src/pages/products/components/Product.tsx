import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import type { IProduct } from '../../../types/product'
import { formatCurrent, formatNumberToSocialStyle } from '../../../utils/helper'

const Product = ({ product }: { product: IProduct }) => {
  return (
    <Link to='/'>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className='group bg-white rounded shadow-sm hover:shadow-lg overflow-hidden'
      >
        {/* Image */}
        <div className='relative w-full pt-[100%] overflow-hidden'>
          <motion.img
            src={product.image}
            alt={product.name}
            className='absolute top-0 left-0 w-full h-full object-cover'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Content */}
        <div className='p-3'>
          {/* Title */}
          <h3 className='min-h-[2.5rem] text-sm text-gray-700 line-clamp-2 leading-snug'>{product.name}</h3>

          {/* Price */}
          <div className='mt-2 flex items-center gap-2'>
            <span className='text-orange-600 font-semibold text-base'>
              ₫{formatCurrent(product.price_before_discount)}
            </span>
            <span className='text-xs text-gray-400 line-through'>₫{formatCurrent(product.price)}</span>
          </div>

          {/* Rating & Sold */}
          <div className='mt-3 flex items-center justify-between text-xs text-gray-500'>
            <div className='flex items-center gap-1'>
              <span className='text-yellow-400'>★</span>
              <span>{formatNumberToSocialStyle(product.rating)}</span>
            </div>
            <span>Đã bán 5.6k</span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default Product
