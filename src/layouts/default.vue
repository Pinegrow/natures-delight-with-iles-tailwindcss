<script setup lang="ts">
  useHeadAndMeta()
  const { route } = usePage()
</script>

<template>
  <div>
    <div
      class="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <NavBar
        class="fixed bg-white dark:bg-neutral-950 shadow z-20"
        :current-path="route.path"
      />
      <main class="mt-24 shadow">
        <slot />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
<style></style>
