<script setup lang="ts">
  import { computed } from 'vue'
  import { useAppConfig } from 'iles'
  import type { SideBarItem } from '@/types'
  import { joinUrl } from '@/utils'

  const props = defineProps<{
    item: SideBarItem
    header?: boolean
    table?: boolean
  }>()

  const { base } = useAppConfig()

  const link = computed(() => props.item.link && joinUrl(base, props.item.link))

  const route = useRoute()
  const active = computed(() => {
    return route.hash === link.value
  })
</script>
<template>
  <a
    v-if="link"
    :href="link"
    :class="[active ? 'font-semibold' : 'font-normal', '']"
    class="mt-2 text-primary-600 dark:text-primary-200 pl-1 text-base"
  >
    {{ item.text }}
  </a>
  <span v-else class="text-primary-600 dark:text-primary-200">
    {{ item.text }}
  </span>
</template>
<style scoped></style>
