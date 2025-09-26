import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import type { ComputedRef, Ref } from 'vue'
import type {
  GetAllProductsResponse,
  GetProductDetailParams,
  GetProductDetailResponse,
  GetProductsParams,
  GetProductsResponse,
} from './types'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_PATH = import.meta.env.VITE_API_PATH

const productApi = axios.create({
  baseURL: BASE_URL,
})

productApi.interceptors.request.use(
  (request) => {
    return request
  },
  (error) => {
    return Promise.reject(error)
  },
)

productApi.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (error) => {
    return Promise.reject(error.response.data)
  },
)

const getProducts = async (params: GetProductsParams): Promise<GetProductsResponse> => {
  const res = await productApi.get(`/v2/api/${API_PATH}/products`, { params })

  return res.data
}

const getAllProducts = async (): Promise<GetAllProductsResponse['products']> => {
  const res = await productApi.get(`/v2/api/${API_PATH}/products/all`)

  return res.data.products
}

const getProductDetail = async (
  params: GetProductDetailParams,
): Promise<GetProductDetailResponse> => {
  const res = await productApi.get(`/v2/api/${API_PATH}/product/${params.id}`)

  return res.data.product
}

export const apiGetProducts = (params?: {
  page?: Ref<GetProductsParams['page']>
  category?: Ref<GetProductsParams['category']>
}) =>
  useQuery<GetProductsResponse, Error>({
    queryKey: [params?.page, params?.category],
    queryFn: () =>
      getProducts({
        category: params?.category?.value,
        page: params?.page?.value,
      }),
  })

export const apiGetAllProducts = () =>
  useQuery<GetAllProductsResponse['products'], Error>({
    queryKey: ['productsAll'],
    queryFn: getAllProducts,
  })

export const apiGetProductDetail = (productId: ComputedRef<GetProductDetailParams['id']>) =>
  useQuery<GetProductDetailResponse, Error>({
    queryKey: [productId],
    queryFn: () =>
      getProductDetail({
        id: productId.value,
      }),
  })
