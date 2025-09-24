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
        <h3 class="fw-bold mb-4 pt-3">輸入結帳資訊</h3>
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
        <form>
          <div class="mb-2">
            <label for="ContactMail" class="text-muted mb-0">電子信箱</label>
            <input
              type="email"
              class="form-control"
              id="ContactMail"
              aria-describedby="emailHelp"
              placeholder="example@gmail.com"
            />
          </div>
          <div class="mb-2">
            <label for="ContactName" class="text-muted mb-0">姓名</label>
            <input type="text" class="form-control" id="ContactName" placeholder="王漂亮" />
          </div>
          <div class="mb-2">
            <label for="ContactPhone" class="text-muted mb-0">手機</label>
            <input type="text" class="form-control" id="ContactPhone" placeholder="0912345678" />
          </div>
          <div class="mb-2">
            <label for="ContactMessage" class="text-muted mb-0">留言</label>
            <textarea
              class="form-control"
              rows="3"
              id="ContactMessage"
              placeholder="六角學院，只要你不放棄，我們就不放棄你 ... "
            ></textarea>
          </div>
        </form>
        <div
          class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100"
        >
          <RouterLink to="/cart" class="text-dark mt-md-0 mt-3"
            ><i class="fas fa-chevron-left me-2"></i>返回</RouterLink
          >
          <RouterLink to="/checkout-payment" class="btn btn-dark py-3 px-7">結帳</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
