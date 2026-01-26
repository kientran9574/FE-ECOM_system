import { useProductQuery } from '../../../hooks/useProduct'
import AsideFilter from './AsideFilter'
import SortFilter from './SortFilter'
import { motion } from 'motion/react'
import { useQueryParams } from '../../../hooks/useQueryParams'
import Product from './Product'
const ProductsList = () => {
  const queryParams = useQueryParams()
  const productQuery = useProductQuery(queryParams)
  const product = productQuery.data
  return (
    <div className='bg-gray-200 py-6'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className='grid grid-cols-12 gap-6'
        >
          <div className='col-span-3'>
            <AsideFilter />
          </div>
          <div className='col-span-9'>
            <SortFilter />
            <motion.div
              initial='hidden'
              animate='show'
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
              className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'
            >
              {product &&
                product.map((item) => (
                  <motion.div
                    key={item._id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                  >
                    <Product product={item} />
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductsList
