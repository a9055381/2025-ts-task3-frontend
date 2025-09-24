<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <Navbar />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="fw-bold mb-4 pt-3">選擇付款方式</h3>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-4">
        <div class="border p-4 mb-4">
          <div class="d-flex">
            <img
              src="https://images.unsplash.com/photo-1631122750867-6cfee01358b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmlyZCUyMG9mJTIwUGFyYWRpc2V8ZW58MHwwfDB8fHwy"
              alt=""
              class="me-2"
              style="width: 48px; height: 48px; object-fit: cover"
            />
            <div class="w-100">
              <div class="d-flex justify-content-between">
                <p class="mb-0 fw-bold">天堂鳥蕉</p>
                <p class="mb-0">NT$12,000</p>
              </div>
              <p class="mb-0 fw-bold">x1</p>
            </div>
          </div>
          <div class="d-flex mt-2">
            <img
              src="https://images.unsplash.com/photo-1680812992886-6231db0dabeb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              class="me-2"
              style="width: 48px; height: 48px; object-fit: cover"
            />
            <div class="w-100">
              <div class="d-flex justify-content-between">
                <p class="mb-0 fw-bold">石蓮花</p>
                <p class="mb-0">NT$12,000</p>
              </div>
              <p class="mb-0 fw-bold">x1</p>
            </div>
          </div>
          <table class="table mt-4 border-top border-bottom text-muted">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                <td class="text-end border-0 px-0 pt-4">NT$24,000</td>
              </tr>
              <tr>
                <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</th>
                <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">總計</p>
            <p class="mb-0 h4 fw-bold">NT$24,000</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card rounded-0">
          <div class="card-header bg-white border-0 py-3">
            <p class="mb-0 position-relative custom-checkout-label">Apple Pay</p>
          </div>
        </div>
        <div
          class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100"
        >
          <RouterLink to="/checkout" class="text-dark mt-md-0 mt-3"
            ><i class="fas fa-chevron-left me-2"></i>返回</RouterLink
          >
          <RouterLink to="/checkout-success" class="btn btn-dark py-3 px-7">付款</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
