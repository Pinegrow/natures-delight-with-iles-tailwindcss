<script setup lang="ts">
  defineProps({
    currentPath: {
      type: String,
      default: '/',
    },
  })

  const { allNavs, navsPrimary, navsSecondary } = useNavMenu()
</script>
<template>
  <div class="w-full">
    <nav class>
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex h-24 items-center justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex flex-shrink-0 items-center">
              <a
                href="/"
                class="flex items-center text-primary-600 dark:text-primary-200"
              >
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
                <h6 class="font-extrabold leading-none pt-2 text-xl">
                  Nature's<br />Delight
                </h6>
              </a>
            </div>
            <NavPrimary
              :navs="navsPrimary"
              :current-path="currentPath"
              class="hidden sm:flex sm:ml-6"
              client:media="screen and (min-width: 640px)"
            />
          </div>
          <DarkModeSwitch client:load />
          <div class="-mr-2 items-center relative">
            <NavHamburger
              v-if="navsSecondary.length"
              class="hidden sm:block"
              client:load
            />
            <NavHamburger v-if="allNavs.length" class="sm:hidden" client:load />
            <NavSecondary
              class="hidden sm:flex sm:justify-end absolute right-0 mt-4"
              :navs="navsSecondary"
              :current-path="currentPath"
              client:media="screen and (min-width: 640px)"
            />
          </div>
        </div>
      </div>
      <NavSecondary
        class="sm:hidden"
        :navs="allNavs"
        :current-path="currentPath"
        client:media="screen and (max-width: 640px)"
      />
    </nav>
  </div>
</template>
<style scoped></style>
