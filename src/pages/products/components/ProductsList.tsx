import { useProductQuery } from '../../../hooks/useProduct'
import AsideFilter from './AsideFilter'
import SortFilter from './SortFilter'
import { motion } from 'motion/react'
import { useQueryParams } from '../../../hooks/useQueryParams'
import Product from './Product'
import type { ProductListQueryParams } from '../../../types/product'
import { isUndefined, omitBy } from 'lodash'
import Pagination from '../../../components/Pagination'

export type QueryStringConfig = {
  [key in keyof ProductListQueryParams]: string
}

const ProductsList = () => {
  const queryParams = useQueryParams()
  const queryConfig: QueryStringConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit,
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      name: queryParams.name,
      order: queryParams.order,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      rating_filter: queryParams.rating_filter,
      category: queryParams.category
    },
    isUndefined
  )
  const productQuery = useProductQuery(queryConfig)
  const product = productQuery.data?.items
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
            <AsideFilter queryConfig={queryConfig} />
          </div>
          <div className='col-span-9'>
            <SortFilter pageSize={productQuery.data?.pagination?.page_size as number} queryConfig={queryConfig} />
            <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
              {product &&
                product.length > 0 &&
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
            </div>
          </div>
        </motion.div>
        <Pagination pageSize={productQuery.data?.pagination?.page_size as number} queryConfig={queryConfig} />
      </div>
    </div>
  )
}

export default ProductsList
