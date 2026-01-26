import type { IProduct, IProductList, ProductListQueryParams } from '../types/product'
import type { IRessponseSuccess } from '../types/utils'
import http from '../utils/axios'

export const productApi = {
  getProducts: (params: ProductListQueryParams) => {
    return http.get<IRessponseSuccess<IProductList>>('/products', {
      params
    })
  },
  getProduct: (payload: { id: string }) => {
    return http.get<IRessponseSuccess<IProduct>>(`/products/${payload.id}`)
  }
}
