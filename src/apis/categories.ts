import type { IProductCategories } from '../types/product'
import type { IRessponseSuccess } from '../types/utils'
import http from '../utils/axios'

export const categoriesApi = {
  getCategories: () => {
    return http.get<IRessponseSuccess<IProductCategories[]>>('/categories')
  }
}
