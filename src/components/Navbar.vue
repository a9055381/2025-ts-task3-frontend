<script setup lang="ts"></script>

<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white mt-n1 py-2 px-3 z-1"
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
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <RouterLink class="nav-item nav-link me-4" to="/products">產品列表</RouterLink>
        <RouterLink class="d-md-none nav-item nav-link" to="/cart">購物車</RouterLink>
        <RouterLink class="d-none d-md-block nav-item nav-link" to="/cart"
          ><i class="fas fa-shopping-cart"></i
        ></RouterLink>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
