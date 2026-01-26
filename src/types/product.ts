export interface IProduct {
  _id: string
  images: string[]
  price: number
  rating: number
  price_before_discount: number
  quantity: number
  sold: number
  view: number
  name: string
  description: string
  category: {
    _id: string
    name: string
  }
  image: string
  createdAt: string
  updatedAt: string
}
export interface IProductList {
  products: IProduct[]
  pagination: {
    page: number
    limit: number
    page_size: number
  }
}
type SortBy = 'createdAt' | 'view' | 'sold' | 'price'
type Order = 'asc' | 'desc'
export interface ProductListQueryParams {
  page?: number
  limit?: number
  sort_by?: SortBy
  order?: Order
  exclude?: string
  rating_filter?: number
  price_max?: number
  price_min?: number
  name?: string
}
