<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'KeyFeatures',
  // 	},
  // })
</script>
<template>
  <section class="bg-primary-100 dark:bg-primary-700">
    <section class="py-20">
      <div class="container mx-auto px-4 relative">
        <div class="flex flex-wrap -mx-4 items-center mb-4">
          <div class="px-4 w-full lg:w-7/12">
            <h2 class="font-medium mb-1">Services</h2>
            <h3 class="font-bold mb-1 text-3xl">
              We can do useful things for our clients
            </h3>
            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae congue tortor.
            </p>
          </div>
          <div class="px-4 w-full lg:text-right lg:w-5/12">
            <BaseButton variant="soft">Read More</BaseButton>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full p-4 xl:w-3/12 sm:w-6/12">
            <div class="px-6 py-16 rounded-lg shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-10 inline-block mb-4 text-primary-600 w-10"
                fill="currentColor"
              >
                <path
                  d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.464 12.536L20 12l-3.536-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.414 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5l3.64-10h-2.128l-3.64 10h2.128z"
                />
              </svg>
              <h4 class="font-bold mb-2 text-xl">Development</h4>
              <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor.
              </p>
              <BaseButton size="sm" class="mt-6">Learn More</BaseButton>
            </div>
          </div>
          <div class="w-full p-4 xl:w-3/12 sm:w-6/12">
            <div class="px-6 py-16 rounded-lg shadow-lg sm:-mb-16 sm:mt-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-10 inline-block mb-4 text-primary-600 w-10"
                fill="currentColor"
              >
                <path
                  d="M5.636 12.707l1.828 1.829L8.88 13.12 7.05 11.293l1.414-1.414 1.829 1.828 1.414-1.414L9.88 8.464l1.414-1.414L13.12 8.88l1.415-1.415-1.829-1.828 2.829-2.828a1 1 0 0 1 1.414 0l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414l2.828-2.829zm8.485 5.656l4.243-4.242L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 5.636 9.878z"
                />
              </svg>
              <h4 class="font-bold mb-2 text-xl">Product Design</h4>
              <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor.
              </p>
              <BaseButton size="sm" class="mt-6">Learn More</BaseButton>
            </div>
          </div>
          <div class="w-full p-4 xl:w-3/12 sm:w-6/12">
            <div class="px-6 py-16 rounded-lg shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-10 inline-block mb-4 text-primary-600 w-10"
                fill="currentColor"
              >
                <path
                  d="M15 21h-2v-3h-2v3H9v-2H7v2H4a1 1 0 0 1-1-1v-3h2v-2H3v-2h3v-2H3V9h2V7H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v-2h-2v2z"
                />
              </svg>
              <h4 class="font-bold mb-2 text-xl">UI/UX Research</h4>
              <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor.
              </p>
              <BaseButton class="hover:underline mt-6" size="sm"
                >Learn More</BaseButton
              >
            </div>
          </div>
          <div class="w-full p-4 xl:w-3/12 sm:w-6/12">
            <div class="px-6 py-16 rounded-lg shadow-lg sm:mt-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="h-10 inline-block mb-4 text-primary-600 w-10"
              >
                <path
                  d="M8 5h3v9H8v3H6v-3H3V5h3V2h2v3zm10 5h3v9h-3v3h-2v-3h-3v-9h3V7h2v3z"
                />
              </svg>
              <h4 class="font-bold mb-2 text-xl">Digital Marketing</h4>
              <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor.
              </p>
              <BaseButton
                size="sm"
                class="mt-6"
                label="Learn More"
              ></BaseButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<style scoped></style>
