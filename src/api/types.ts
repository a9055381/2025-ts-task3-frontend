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

export type UpdateCartItemParams =
  paths['/v2/api/{api_path}/cart/{id}']['put']['requestBody']['content']['application/json']['data'] &
    Pick<paths['/v2/api/{api_path}/cart/{id}']['put']['parameters']['path'], 'id'>

export type UpdateCartItemResponse = components['schemas']['userUpdateCart']

export type DeleteCartItemParams =
  paths['/v2/api/{api_path}/cart/{id}']['delete']['parameters']['path']['id']

export type DeleteCartItemResponse = components['schemas']['userDeleteCart']

// Order
export type CreateOrderParams =
  paths['/v2/api/{api_path}/order']['post']['requestBody']['content']['application/json']['data']

export type CreateOrderResponse = components['schemas']['userCheckoutOrder']

export type ProcessPaymentParams =
  paths['/v2/api/{api_path}/pay/{order_id}']['post']['parameters']['path']['order_id']

export type ProcessPaymentResponse = components['schemas']['userPayment']

export type ApplyCouponParams =
  paths['/v2/api/{api_path}/coupon']['post']['requestBody']['content']['application/json']['data']['code']

export type ApplyCouponResponse = components['schemas']['userApplyCoupon']
