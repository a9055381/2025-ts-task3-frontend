<script setup lang="ts">
import 'swiper/css'

import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import 'bootstrap/js/dist/carousel'
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'

import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

import { apiAddCartItem } from '@/api/cart'
import { apiGetProductDetail, apiGetProducts } from '@/api/products'

const productNum = ref(1)

const route = useRoute()

const productId = computed(() => route.params.id as string)

const { data: product } = apiGetProductDetail(productId)

const recommendCategory = computed(() => {
  if (!product.value) return ''

  return product.value.category
})

const { data: recommend } = apiGetProducts({
  category: recommendCategory,
})

const recommendProducts = computed(() => {
  if (!recommend.value) return []

  return recommend.value.products.filter((product) => product.id !== route.params.id)
})

const swiperContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  if (swiperContainer.value) {
    const swiper = new Swiper(swiperContainer.value, {
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
})

const { mutate: addCartItem } = apiAddCartItem()

const handleAddCartItem = () => {
  addCartItem({
    product_id: productId.value,
    qty: productNum.value,
  })
}
</script>

<template>
  <div class="container">
    <Navbar />
    <div class="row align-items-center">
      <div class="col-md-7">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item"><RouterLink class="text-muted" to="/">首頁</RouterLink></li>
            <li class="breadcrumb-item">
              <RouterLink class="text-muted" to="/products">產品列表</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">產品詳細</li>
          </ol>
        </nav>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-container carousel-inner">
            <div class="carousel-item active">
              <img :src="product?.imageUrl" class="d-block w-100" alt="主圖" />
            </div>
            <div
              v-for="image in product?.imagesUrl.filter(Boolean)"
              :key="image"
              class="carousel-item"
            >
              <img :src="image" class="d-block w-100" alt="副圖" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-md-5">
        <h2 class="fw-bold h1 mb-1">{{ product?.title }}</h2>
        <p class="mb-0 text-muted text-end">
          <del>NT${{ product?.origin_price?.toLocaleString('zh-TW') }}</del>
        </p>
        <p class="h4 fw-bold text-end">NT${{ product?.price?.toLocaleString('zh-TW') }}</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button
                  @click="productNum--"
                  :disabled="productNum <= 1"
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon1"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control border-0 text-center my-auto shadow-none bg-light"
                readonly
                :value="productNum"
              />
              <div class="input-group-append">
                <button
                  @click="productNum++"
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon2"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <button
              @click="handleAddCartItem"
              type="button"
              class="text-nowrap btn btn-dark w-100 py-2"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-4">
        <p>
          {{ product?.description }}
        </p>
      </div>
      <div class="col-md-3">
        <p style="white-space: pre-wrap" class="text-muted">{{ product?.content }}</p>
      </div>
    </div>
    <template v-if="recommendProducts.length">
      <h3 class="fw-bold">你可能會喜歡的植栽</h3>
      <div ref="swiperContainer" class="swiper mt-4 mb-5">
        <div class="swiper-wrapper">
          <div
            v-for="recommendProduct in recommendProducts"
            :key="recommendProduct.id"
            class="swiper-slide"
          >
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                :src="recommendProduct.imageUrl"
                class="card-img-top object-fit-cover rounded-0"
                style="height: 280px"
                :alt="recommendProduct.title"
              />
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <RouterLink :to="`/products/${recommendProduct.id}`">{{
                    recommendProduct.title
                  }}</RouterLink>
                </h4>
                <p class="card-text mb-0">
                  NT${{ recommendProduct.price.toLocaleString('zh-TW') }}
                  <span class="text-muted"
                    ><del
                      >NT${{ recommendProduct.origin_price.toLocaleString('zh-TW') }}
                    </del></span
                  >
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
  <Footer />
</template>

<style lang="scss" scoped></style>
