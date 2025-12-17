<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

import { apiGetAllProducts, apiGetProducts } from '@/api/products'
import type { Pagination, Product } from '@/types/product'

const currentPage = ref<string>('1')
const selectedCategory = ref<string>('')

const products = ref<Product[]>([])
const allProducts = ref<Product[]>([])

const pagination = ref<Pagination>({
  total_pages: 0,
  current_page: 0,
  has_pre: false,
  has_next: false,
  category: '',
})

const getProducts = async () => {
  try {
    const res = await apiGetProducts({
      page: currentPage.value,
      category: selectedCategory.value,
    })
    products.value = res.data.products
    pagination.value = res.data.pagination
  } catch (error) {
    alert('取得產品列表失敗')
  }
}

const getAllProducts = async () => {
  try {
    const res = await apiGetAllProducts()
    allProducts.value = res.data.products
  } catch (error) {
    alert('取得所有產品列表失敗')
  }
}

onMounted(() => {
  getProducts()
  getAllProducts()
})

const categories = computed(() => {
  if (!allProducts.value) return []

  const res = [...new Set(allProducts.value.map((product) => product.category))]

  return res
})
</script>

<template>
  <div class="container">
    <Navbar />
  </div>
  <div
    class="position-relative d-flex align-items-center justify-content-center"
    style="min-height: 400px"
  >
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://images.unsplash.com/photo-1656275537622-7837184a0dcc?q=80&w=1350&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.1;
      "
    ></div>
    <h2 class="fw-bold">產品列表</h2>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-4">
        <div
          class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
          id="accordionExample"
        >
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <div class="d-flex justify-content-between align-items-center pe-1">
                <h4 class="mb-0">分類</h4>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li>
                    <button
                      @click="selectedCategory = ''"
                      class="d-block py-2 border-0 bg-transparent text-muted"
                      type="button"
                    >
                      全部
                    </button>
                  </li>
                  <li v-for="category in categories" :key="category">
                    <button
                      @click="selectedCategory = category"
                      class="d-block py-2 border-0 bg-transparent text-muted"
                      type="button"
                    >
                      {{ category }}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div v-for="product in products" :key="product.id" class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                style="height: 320px"
                :src="product.imageUrl"
                class="card-img-top object-fit-cover rounded-0"
                alt="琴葉榕"
              />
              <button
                type="button"
                class="position-absolute text-dark border-0 bg-transparent"
                style="right: 16px; top: 16px"
              >
                <i class="far fa-heart"></i>
              </button>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <RouterLink :to="`/products/${product.id}`">{{ product.title }}</RouterLink>
                </h4>
                <p class="card-text mb-0">
                  NT${{ product.price?.toLocaleString('zh-TW') }}
                  <span class="text-muted"
                    ><del>NT${{ product.origin_price?.toLocaleString('zh-TW') }}</del></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav class="d-flex justify-content-center">
          <ul class="pagination">
            <li class="page-item">
              <button
                @click="currentPage = (parseInt(currentPage) - 1).toString()"
                :disabled="!pagination?.has_pre"
                type="button"
                class="page-link"
                :class="{ disabled: !pagination?.has_pre }"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            <li
              v-for="pageNum in pagination?.total_pages"
              :key="pageNum"
              class="page-item"
              :class="{ active: currentPage === pageNum.toString() }"
            >
              <button
                @click="currentPage = pageNum.toString()"
                :disabled="currentPage === pageNum.toString()"
                class="page-link"
                type="button"
              >
                {{ pageNum }}
              </button>
            </li>
            <li class="page-item">
              <button
                @click="currentPage = (parseInt(currentPage) + 1).toString()"
                :disabled="!pagination?.has_next"
                class="page-link"
                :class="{ disabled: !pagination?.has_next }"
                type="button"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss" scoped></style>
