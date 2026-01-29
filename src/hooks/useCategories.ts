import { useQuery } from '@tanstack/react-query'
import { categoriesApi } from '../apis/categories'

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => categoriesApi.getCategories(),
    select: (res) => res.data.data
  })
}
 