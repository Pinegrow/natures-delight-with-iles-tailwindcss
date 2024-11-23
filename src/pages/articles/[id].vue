<script lang="ts">
  import { useArticles } from '@/composables/articles'
  export default definePageComponent({
    async getStaticPaths() {
      const { listArticles } = useArticles()
      const articles = await listArticles()
      const staticPaths = articles.map((article) => ({
        // Specify the parameters for the page.
        params: { id: String(article.id) },

        // Pass any data needed to render the page.
        props: { articleId: article.id },
      }))
      return staticPaths
    },
  })
</script>

<script setup lang="ts">
  import { computed } from 'vue'
  import { Article } from '@/types'

  const props = defineProps<{ articleId: number }>()
  const { getArticle } = useArticles()
  const article: Article = await getArticle(+props.articleId)

  useHead({
    title: computed(() => article.title),
  })
</script>

<template>
  <div>
    <ArticleCardHeader
      :cover="article.cover_image || article.social_image"
    ></ArticleCardHeader>
    <ArticleCard :article="article" />
  </div>
</template>
<style scoped></style>
