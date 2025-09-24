<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="position-relative d-flex">
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <nav
        class="navbar navbar-expand-lg navbar-light mt-n1 py-2 px-3 z-1"
        style="margin: 0 -0.75rem"
      >
        <RouterLink class="navbar-brand" to="/">
          <img
            class="img-fluid"
            style="width: 3.75rem; height: 3.75rem"
            src="../assets/images/logo.webp"
            alt="logo"
          />
        </RouterLink>
      </nav>
      <div class="row my-auto pb-7">
        <div class="col-md-4 d-flex flex-column">
          <div class="my-auto">
            <h2>付款成功</h2>
            <p>訂單成立！感謝你的購買</p>
            <RouterLink to="/products" class="btn btn-dark mt-4 px-5">繼續逛逛</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-md-50 w-100 position-absolute opacity-1"
      style="
        z-index: -1;
        min-height: 100vh;
        right: 0;
        background-image: url(https://images.unsplash.com/photo-1656275537622-7837184a0dcc?q=80&w=1350&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        background-position: center center;
      "
    ></div>
  </div>
</template>

<style lang="scss" scoped></style>
