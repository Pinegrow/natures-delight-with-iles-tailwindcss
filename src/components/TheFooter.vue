<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'TheFooter',
  // 	},
  // })
</script>
<template>
  <footer class="pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/3"
        >
          <a href="/" class="-ml-6 flex text-primary-600 dark:text-primary-200">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              xml:space="preserve"
              stroke="currentColor"
              fill="none"
              stroke-width="3px"
              viewBox="0 0 48 48"
              height="2.5em"
              class="font-extrabold mr-2 text-xl"
            >
              <path
                d="M33 24a14.46 14.46 0 00-2.69-7.91 14.66 14.66 0 00-1-1.24c-.18-.2-.36-.4-.56-.59s-.39-.38-.59-.56A14.53 14.53 0 005.41 30.9a5.38 5.38 0 01.39.75 8.43 8.43 0 01.71 4.79 8.43 8.43 0 014.79.71 5.38 5.38 0 01.75.39 14.57 14.57 0 0011.66.47"
              ></path>
              <path
                d="M30.93 10.62s0 1.46-2.18 3.64M44 24a15 15 0 01-30 0zm-15 4v11m-3-12l-7 7m20 0l-7-7"
              ></path>
              <path d="M-423-219h690v690h-690z"></path>
            </svg>
            <h6
              class="font-extrabold font-serif inline-flex items-center text-3xl"
            >
              Nature's <br />Delight
            </h6>
          </a>
          <p class="mt-2 text-center w-full lg:text-left">
            Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec.
            Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper
            semper.
          </p>
          <div class="inline-flex mt-6 space-x-3">
            <div class="flex flex-wrap space-x-4">
              <a
                href="https://www.facebook.com/vuedesigner"
                aria-label="facebook"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-facebook"
                  class="text-2xl"
                ></BaseIcon> </a
              ><a
                href="https://twitter.com/vuedesigner"
                aria-label="twitter"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-twitter"
                  class="text-2xl"
                ></BaseIcon> </a
              ><a
                href="https://discord.gg/BYp45Nnu5T"
                aria-label="discord"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-discord-icon"
                  class="text-2xl"
                ></BaseIcon>
              </a>
              <a
                href="https://www.youtube.com/@vuedesigner"
                aria-label="youtube"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-youtube-icon"
                  class="text-2xl"
                ></BaseIcon>
              </a>
            </div>
          </div>
          <div class="my-6 text-center">
            <a>+1 234 567-890</a> <br /><a>hello@fantico.com</a>
          </div>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        >
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            General
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <a href="/" class="hover:text-primary-600 dark:text-primary-200"
                >FAQ</a
              >
            </li>
            <li class="mb-4">
              <a href="/" class="hover:text-primary-600 dark:text-primary-200"
                >News</a
              >
            </li>
            <li class="mb-4">
              <a href="/" class="hover:text-primary-600 dark:text-primary-200"
                >Careers</a
              >
            </li>
            <li class="mb-4">
              <a href="/" class="hover:text-primary-600 dark:text-primary-200"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        >
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Links
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <a
                href="/articles"
                class="hover:text-primary-600 dark:text-primary-200"
                >Articles</a
              >
            </li>
            <li class="mb-4">
              <a
                href="/blog"
                class="hover:text-primary-600 dark:text-primary-200"
                >Blog</a
              >
            </li>
            <li class="mb-4">
              <a
                href="/volunteer"
                class="hover:text-primary-600 dark:text-primary-200"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>
        <div class="flex flex-col sm:w-full md:items-end">
          <hr class="mb-4 opacity-25" />
          <p class="py-1 text-sm sm:text-center">
            &copy; 2002 - 2021. All Rights Reserved - Company Name
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
