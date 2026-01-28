import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { productApi } from '../apis/product'
import type { QueryStringConfig } from '../pages/products/components/ProductsList'

export const useProductQuery = (params: QueryStringConfig) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => productApi.getProducts(params),
    placeholderData: keepPreviousData,
    select: (res) => ({
      items: res.data.data?.products || [],
      pagination: res.data.data?.pagination
    })
  })
}
