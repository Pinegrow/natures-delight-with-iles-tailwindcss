<script setup lang="ts">
  defineProps({
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    pricePerKg: {
      type: String,
      required: true,
    },
  })
</script>
<template>
  <div class="p-4 w-full sm:w-6/12 lg:w-4/12 xl:w-3/12">
    <div
      class="overflow-hidden text-neutral-900 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-900 rounded-lg"
    >
      <img class="group-hover:opacity-50 w-full" :alt="title" :src="imageUrl" />
      <div class="m-6">
        <h5>{{ title }}</h5>
        <div
          class="-mx-2 flex flex-wrap items-center justify-between mt-2 py-1"
        >
          <div class="px-2 py-1 w-full sm:w-auto">
            <span>${{ pricePerKg }}/kg</span>
          </div>
          <div class="px-2 py-1 w-full sm:w-auto">
            <BaseButton
              trailing
              trailing-icon="i-material-symbols-add-shopping-cart"
              ><span>Add to Cart</span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
