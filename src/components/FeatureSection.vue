<script setup lang="ts">
  import products from '@/data/products.json'
</script>
<template>
  <section
    class="bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="text-white dark:text-neutral-950"
      fill="currentColor"
    >
      <path
        data-name="Path 7040"
        d="M1440 256l-80-10.7c-80-10.3-240-32.3-400-74.6C800 128 640 64 480 69.3 320 75 160 149 80 186.7L0 224V0h1440z"
      ></path>
    </svg>
    <div class="py-12">
      <div class="container mx-auto px-4 relative">
        <div class="flex flex-wrap -mx-4 items-center mb-4">
          <div class="px-4 w-full lg:w-7/12">
            <h6 class="text-primary-100 dark:text-primary-700">Our Products</h6>
            <h3>Our Featured Menu</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae congue tortor.
            </p>
          </div>
          <div class="px-4 w-full lg:text-right lg:w-5/12">
            <BaseButton> Go to Shop </BaseButton>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 justify-center">
          <ProductCard
            v-for="(product, index) in products"
            v-bind="product"
            :key="index"
          >
          </ProductCard>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
