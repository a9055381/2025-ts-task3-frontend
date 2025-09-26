import type { components, paths } from '../openapi/types/ec-course'

// Products
export type GetProductsParams = Exclude<
  paths['/v2/api/{api_path}/products']['get']['parameters']['query'],
  undefined
>
export type GetProductsResponse = components['schemas']['getProducts']

export type GetAllProductsResponse = components['schemas']['getProductsAll']

export type GetProductDetailParams = Pick<
  paths['/v2/api/{api_path}/product/{id}']['get']['parameters']['path'],
  'id'
>

export type GetProductDetailResponse = components['schemas']['userProduct']['product']

// Cart
export type GetCartResponse = components['schemas']['userGetCarts']['data']

export type AddCartItemParams =
  paths['/v2/api/{api_path}/cart']['post']['requestBody']['content']['application/json']['data']

export type AddCartItemResponse = components['schemas']['userAddCart']
