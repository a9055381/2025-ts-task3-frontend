export type CartInfo = GetCartResponse['data']

export type ProductInfo = {
  category: string
  content: string
  description: string
  id: string
  imageUrl: string
  imagesUrl: string
  is_enabled: number
  num: number
  origin_price: number
  price: number
  title: string
  unit: string
}

export type GetCartResponse = {
  success: boolean
  data: {
    carts: {
      coupon: {
        code: string
        due_date: number
        id: string
        is_enabled: number
        percent: number
        title: string
      }
      final_total: number
      id: string
      product: ProductInfo
      product_id: string
      qty: number
      total: number
    }[]
    total: number
    final_total: number
  }
  messages: unknown[]
}

export type AddCartItemResponse = {
  success: boolean
  message: string
  data: {
    product_id: string
    qty: number
    id: string
    total: number
    final_total: number
    product: ProductInfo
  }
}

export type UpdateCartItemResponse = {
  success: boolean
  message: string
  data: {
    product_id: string
    qty: number
  }
}

export type DeleteCartItemResponse = {
  success: boolean
  message: string
}
