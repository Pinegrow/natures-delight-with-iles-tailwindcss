<page>
    title: Blog
    alias: ['/posts']
</page>

<template>
  <div class="pb-12">
    <TheHeader>
      <div>
        <div class="flex items-center">
          <h2 class="text-5xl">Blog</h2>
          <BaseButton size="xs" class="ml-2" color="secondary" to="/feed.rss">
            <span>RSS Feed</span>
          </BaseButton>
        </div>
        <div class="flex items-center mt-2">
          <h6 class="mt-2">Source for this blog</h6>
          <BaseButton
            size="xs"
            class="ml-2"
            color="secondary"
            to="https://github.com/vuejs/blog"
            target="_blank"
            ><span>Click here</span>
          </BaseButton>
        </div>
        <slot />
      </div>
    </TheHeader>
    <BlogList />
  </div>
</template>
