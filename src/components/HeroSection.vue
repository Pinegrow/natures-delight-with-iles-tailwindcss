<script setup lang="ts">
  // defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'HeroSection',
  // 	},
  // })
</script>
<template>
  <section
    class="bg-center bg-cover bg-design-image bg-no-repeat blur-none z-0 lg:bg-design-image-large"
  >
    <div class="container mx-auto pb-6 pt-24 px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center space-y-6 lg:space-y-0">
        <div class="px-4 w-full lg:w-6/12">
          <div
            class="p-10 rounded-lg bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
          >
            <div class="flex font-serif items-center">
              <h6>Pure &amp; Organic</h6>
              <BaseIcon height="32px" class="mb-2 ml-2"></BaseIcon>
            </div>
            <h1>Fresh from Delights of Nature</h1>
            <p class="mb-6 sm:pr-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet.
            </p>
            <BaseButton
              size="xl"
              label="Buy Now"
              target="_blank"
              to="https://github.com/pinegrow/natures-delight-with-iles-tailwindcss"
            >
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      fill="currentColor"
      class="bg-transparent text-white dark:text-neutral-950"
    >
      <path
        d="M0,64L80,74.7C160,85,320,107,480,149.3C640,192,800,256,960,250.7C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </section>
</template>
<style scoped></style>
