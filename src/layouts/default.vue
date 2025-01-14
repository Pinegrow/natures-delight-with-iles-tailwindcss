<script setup lang="ts">
  const { frontmatter, site, route } = usePage()
  const { title, description, ogImage, generator, tags } = frontmatter
  const canonicalUrl = new URL(route.path, site.url)

  useHeadAndMeta({ title, description, ogImage, canonicalUrl, generator, tags })

  const currentPath = computed(() => {
    return route.path
  })
</script>

<template>
  <div>
    <div
      class="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <NavBar
        class="fixed bg-white dark:bg-neutral-950 shadow z-20"
        :current-path="currentPath"
      />
      <main class="mt-24 shadow">
        <slot />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
<style></style>
