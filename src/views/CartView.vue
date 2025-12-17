<script setup lang="ts">
import 'swiper/css'

import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

import { apiApplyCoupon } from '@/api/order'
import { apiGetProducts } from '@/api/products'
import { useCartStore } from '@/stores/cartStore'
import type { CartInfo } from '@/types/cart'
import type { Product } from '@/types/product'
import { storeToRefs } from 'pinia'
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import { nextTick, onMounted, ref, watch } from 'vue'

const cartStore = useCartStore()

const { cart, isUpdating, isDeleting } = storeToRefs(cartStore)

onMounted(() => {
  getProducts()
})

const products = ref<Product[]>([])

const swiperContainer = ref<HTMLElement | null>(null)

watch(
  () => products.value,
  async (newProducts) => {
    if (newProducts.length > 0) {
      await nextTick()
      if (swiperContainer.value) {
        new Swiper(swiperContainer.value, {
          modules: [Autoplay],
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          slidesPerView: 2,
          spaceBetween: 10,
          breakpoints: {
            767: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
        })
      }
    }
  },
)

const getProducts = async () => {
  try {
    const res = await apiGetProducts()
    products.value = res.data.products
  } catch (error) {
    alert('取得產品列表失敗')
  }
}

type CartItem = CartInfo['carts'][number]

const handleUpdateCartItem = async (type: 'plus' | 'minus', cartItem: CartItem) => {
  let cartItemNum = cartItem.qty
  if (type === 'plus') {
    cartItemNum++
  } else {
    cartItemNum--
  }

  cartStore.updataCartItem({
    id: cartItem.id,
    product_id: cartItem.product.id,
    qty: cartItemNum,
  })
}

const handleDeleteCartItem = async (cartId: string) => {
  cartStore.deleteCartItem(cartId)
}

const couponCode = ref<string>('')

const isApplyingCoupon = ref(false)

const handleApplyCoupon = async () => {
  if (!couponCode.value.trim()) return

  try {
    isApplyingCoupon.value = true

    await apiApplyCoupon(couponCode.value)
  } catch (error) {
    alert('套用優惠券失敗，優惠券已過期或不存在')
  } finally {
    isApplyingCoupon.value = false
  }
}
</script>

<template>
  <div class="container">
    <Navbar />
    <div
      v-if="cart?.carts.length === 0"
      class="min-vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <p class="text-center">目前購物車還沒有任何商品</p>
      <div class="my-6">
        <RouterLink to="/products" class="btn btn-lg btn-dark rounded-3">前往逛逛</RouterLink>
      </div>
    </div>
    <div v-else class="mt-3">
      <h3 class="mt-3 mb-4">購物車</h3>
      <div class="row">
        <div class="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="border-0 ps-0">產品名稱</th>
                <th scope="col" class="border-0">產品數量</th>
                <th scope="col" class="border-0">價格</th>
                <th scope="col" class="border-0"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cartItem in cart?.carts" class="border-bottom border-top">
                <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                  <img
                    :src="cartItem.product.imageUrl"
                    :alt="cartItem.product.title"
                    style="width: 72px; height: 72px; object-fit: cover"
                  />
                  <p class="mb-0 fw-bold ms-3 d-inline-block">{{ cartItem.product.title }}</p>
                </th>
                <td class="border-0 align-middle" style="max-width: 160px">
                  <div class="input-group pe-5">
                    <div class="input-group-prepend">
                      <button
                        @click="() => handleUpdateCartItem('minus', cartItem)"
                        :disabled="cartItem.qty === 1 || isUpdating"
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon1"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control border-0 text-center my-auto shadow-none"
                      readonly
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      :value="cartItem.qty"
                    />
                    <div class="input-group-append">
                      <button
                        @click="() => handleUpdateCartItem('plus', cartItem)"
                        :disabled="isUpdating"
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="border-0 align-middle">
                  <p class="mb-0 ms-auto">NT${{ cartItem.final_total.toLocaleString('zh-TW') }}</p>
                </td>
                <td class="border-0 align-middle">
                  <button
                    @click="() => handleDeleteCartItem(cartItem.id)"
                    :disabled="isDeleting"
                    class="btn btn-outline-dark border-0 py-2"
                    type="button"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="input-group w-50 mb-3">
            <input
              v-model="couponCode"
              type="text"
              class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none"
              placeholder="折扣碼"
            />
            <div class="input-group-append">
              <button
                @click="handleApplyCoupon"
                :disabled="isApplyingCoupon"
                class="btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0"
                type="button"
                id="button-addon2"
              >
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <h4 class="fw-bold mb-4">訂單資訊</h4>
            <table class="table text-muted border-bottom">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                  <td class="text-end border-0 px-0 pt-4">
                    NT${{ cart?.total.toLocaleString('zh-TW') }}
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總計</p>
              <p class="mb-0 h4 fw-bold">NT${{ cart?.final_total.toLocaleString('zh-TW') }}</p>
            </div>
            <RouterLink to="/checkout" class="btn btn-dark w-100 mt-4">前往結帳</RouterLink>
          </div>
        </div>
      </div>
      <div class="my-5">
        <h3 class="fw-bold">你可能會喜歡的植栽</h3>
        <div ref="swiperContainer" class="swiper mt-4 mb-5">
          <div class="swiper-wrapper">
            <div v-for="product in products" :key="product.id" class="swiper-slide">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img
                  :src="product.imageUrl"
                  class="card-img-top object-fit-cover rounded-0"
                  style="height: 280px"
                  :alt="product.title"
                />
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3">
                    <RouterLink :to="`/products/${product.id}`">{{ product.title }}</RouterLink>
                  </h4>
                  <p class="card-text mb-0">
                    NT${{ product.price.toLocaleString('zh-TW') }}
                    <span class="text-muted"
                      ><del>NT${{ product.origin_price.toLocaleString('zh-TW') }}</del></span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss" scoped></style>
