import { keepPreviousData, useQuery } from '@tanstack/react-query'
import type { ProductListQueryParams } from '../types/product'
import { productApi } from '../apis/product'

export const useProductQuery = (params: ProductListQueryParams) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => productApi.getProducts(params),
    placeholderData: keepPreviousData,
    select: (res) => res.data.data?.products
  })
}
