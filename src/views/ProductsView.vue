<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
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
                  <li><a href="#" class="py-2 d-block text-muted">客廳植栽</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">窗邊植栽</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">書房植栽</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">餐桌植栽</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                style="height: 320px"
                src="https://images.unsplash.com/photo-1616220797246-f01f49dd805d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="card-img-top object-fit-cover rounded-0"
                alt="琴葉榕"
              />
              <a href="#" class="text-dark">
                <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="./detail.html">琴葉榕（Fiddle Leaf Fig）</a></h4>
                <p class="card-text mb-0">
                  NT$2,500 <span class="text-muted"><del>NT$2,500</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                style="height: 320px"
                src="https://images.unsplash.com/photo-1660756723808-d85024a7e5d4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="card-img-top object-fit-cover rounded-0"
                alt="黃金葛"
              />
              <a href="#" class="text-dark">
                <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="./detail.html">黃金葛（Golden Pothos）</a></h4>
                <p class="card-text mb-0">
                  NT$1,800 <span class="text-muted"><del>NT$1,800</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                style="height: 320px"
                src="https://images.unsplash.com/photo-1616122236015-b37dc314d875?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="card-img-top object-fit-cover rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="./detail.html">橡膠樹（Rubber Plant）</a></h4>
                <p class="card-text mb-0">
                  NT$2,600 <span class="text-muted"><del>NT$2,600</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
        <nav class="d-flex justify-content-center">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss" scoped></style>
