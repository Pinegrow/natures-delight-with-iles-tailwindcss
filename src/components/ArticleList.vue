<script setup lang="ts">
  import { useArticles, username, tag } from '@/composables/articles'

  const { listArticles } = useArticles()
  const articles = await listArticles()

  const fetchTag = (_tag) => {
    tag.value = _tag
    username.value = undefined
  }

  const fetchUser = (_username) => {
    username.value = _username
    tag.value = 'vue'
  }
</script>

<template>
  <section>
    <div class="container flex justify-center mx-auto px-4 relative">
      <div v-if="articles.length" class="-mx-4 flex flex-wrap justify-center">
        <div
          v-for="(article, index) in articles"
          :key="index"
          class="p-4 w-full md:w-6/12 lg:w-4/12"
        >
          <ArticleListPreview
            :article="article"
            @fetch-tag="fetchTag"
            @fetch-user="fetchUser"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
