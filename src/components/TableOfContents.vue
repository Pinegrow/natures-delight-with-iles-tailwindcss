<script setup lang="ts">
  import { computed } from 'vue'
  import type { Heading } from '@islands/headings'
  import type { SideBarItem } from '@/types'

  interface HeadingWithChildren extends Heading {
    children?: Heading[]
  }

  const { meta, frontmatter } = usePage()
  const level = computed(
    () => frontmatter.tocLevel || (frontmatter.sidebar === 'auto' ? 3 : 2),
  )

  const headings = computed(() => resolveHeaders(meta.headings || []))

  function resolveHeaders(headings: Heading[]): SideBarItem[] {
    return mapHeaders(groupHeaders(headings))
  }

  function groupHeaders(headings: Heading[]): HeadingWithChildren[] {
    headings = headings.map((h) => Object.assign({}, h))
    let lastHeading: HeadingWithChildren
    headings.forEach((h) => {
      if (h.level === level.value) lastHeading = h
      else if (lastHeading)
        (lastHeading.children || (lastHeading.children = [])).push(h)
    })
    return headings.filter((h) => h.level === level.value)
  }

  function mapHeaders(headings: HeadingWithChildren[]): SideBarItem[] {
    return headings.map((Heading) => ({
      text: Heading.title,
      link: `#${Heading.slug}`,
      children: Heading.children ? mapHeaders(Heading.children) : undefined,
    }))
  }

  const scrollBehavior = () => {
    window.scrollTo(0, 0)
  }
</script>
<template>
  <div
    v-if="headings.length > 0"
    class="-ml-6 flex flex-col py-4 pl-2 py-4 lg:pt-4"
  >
    <SidebarLinkItem
      class="pr-3 uppercase text-xs"
      header
      :item="{ text: 'On This Page', link: '' }"
    />
    <ul class="mb-2 pl-3 pt-3">
      <li v-for="child in headings" :key="child.text">
        <SidebarLinkItem
          :item="child"
          :table="true"
          class="capitalize inline-block max-w-full truncate"
        />
      </li>
      <li>
        <slot />
      </li>
      <li>
        <div class="flex justify-start ml-1 mt-4">
          <BaseButton
            variant="ghost"
            class="flex font-medium text-sm"
            @click="scrollBehavior"
          >
            <span>Back to top</span>
            <BaseIcon
              name="i-material-symbols-arrow-upward"
              class="ml-1"
            ></BaseIcon>
          </BaseButton>
        </div>
      </li>
    </ul>
  </div>
</template>
