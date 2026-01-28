import type { QueryStringConfig } from '../pages/products/components/ProductsList'
import type { IProduct, IProductList } from '../types/product'
import type { IRessponseSuccess } from '../types/utils'
import http from '../utils/axios'

export const productApi = {
  getProducts: (params: QueryStringConfig) => {
    return http.get<IRessponseSuccess<IProductList>>('/products', {
      params
    })
  },
  getProduct: (payload: { id: string }) => {
    return http.get<IRessponseSuccess<IProduct>>(`/products/${payload.id}`)
  }
}
