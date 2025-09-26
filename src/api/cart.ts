import { useMutation, useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import type { AddCartItemParams, AddCartItemResponse, GetCartResponse } from './types'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_PATH = import.meta.env.VITE_API_PATH

const cartApi = axios.create({
  baseURL: BASE_URL,
})

cartApi.interceptors.request.use(
  (request) => {
    return request
  },
  (error) => {
    return Promise.reject(error)
  },
)

cartApi.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (error) => {
    return Promise.reject(error.response.data)
  },
)

const getCart = async (): Promise<GetCartResponse> => {
  const res = await cartApi.get(`/v2/api/${API_PATH}/cart`)

  return res.data.data
}

const addCartItem = async (params: AddCartItemParams): Promise<AddCartItemResponse> => {
  const res = await cartApi.post(`/v2/api/${API_PATH}/cart`, { data: params })

  return res.data
}

export const apiGetCart = () =>
  useQuery<GetCartResponse, Error>({
    queryKey: ['cart'],
    queryFn: getCart,
  })

export const apiAddCartItem = () =>
  useMutation<AddCartItemResponse, Error, AddCartItemParams>({
    mutationFn: (params) => addCartItem(params),
    onSuccess: (res) => {
      alert(res.message)
    },
  })
