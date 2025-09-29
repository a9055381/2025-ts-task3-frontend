import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import axios from 'axios'
import type {
  AddCartItemParams,
  AddCartItemResponse,
  DeleteCartItemParams,
  DeleteCartItemResponse,
  GetCartResponse,
  UpdateCartItemParams,
  UpdateCartItemResponse,
} from './types'

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
  const res = await cartApi.get<{ data: GetCartResponse }>(`/v2/api/${API_PATH}/cart`)

  return res.data.data
}

const addCartItem = async (params: AddCartItemParams): Promise<AddCartItemResponse> => {
  const res = await cartApi.post<AddCartItemResponse>(`/v2/api/${API_PATH}/cart`, { data: params })

  return res.data
}

const updateCartItem = async (params: UpdateCartItemParams): Promise<UpdateCartItemResponse> => {
  const { id: cartId, ...data } = params
  const res = await cartApi.put<UpdateCartItemResponse>(`/v2/api/${API_PATH}/cart/${cartId}`, {
    data,
  })

  return res.data
}

const deleteCartItem = async (cartId: DeleteCartItemParams): Promise<DeleteCartItemResponse> => {
  const res = await cartApi.delete<DeleteCartItemResponse>(`/v2/api/${API_PATH}/cart/${cartId}`)

  return res.data
}

export const apiGetCart = () =>
  useQuery<GetCartResponse, Error>({
    queryKey: ['cart'],
    queryFn: getCart,
  })

export const apiAddCartItem = () => {
  const queryClient = useQueryClient()

  return useMutation<AddCartItemResponse, Error, AddCartItemParams>({
    mutationFn: (params) => addCartItem(params),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      alert(res.message)
    },
  })
}

export const apiUpdateCartItem = () => {
  const queryClient = useQueryClient()

  return useMutation<UpdateCartItemResponse, Error, UpdateCartItemParams>({
    mutationFn: (params) => updateCartItem(params),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      alert(res.message)
    },
  })
}

export const apiDeleteCartItem = () => {
  const queryClient = useQueryClient()

  return useMutation<DeleteCartItemResponse, Error, DeleteCartItemParams>({
    mutationFn: (cartId) => deleteCartItem(cartId),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      alert(res.message)
    },
  })
}
