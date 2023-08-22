// import {createHead} from '@vueuse/head'

import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'

import type { Script } from '@unhead/schema'
type TurboScript = Script & { once: true }

export const headConfig = ({ frontmatter, site }) => {
  return {
    htmlAttrs: { lang: 'en-US' },

    // Other meta tags are added in MetaTags.vue using the Head componentsummary_large_image
    meta: [
      { property: 'charset', content: 'utf-8' },
      {
        property: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { property: 'author', content: site.author },
      { property: 'keywords', content: computed(() => frontmatter.tags) },
    ],
    script: [{ children: checkDarkTheme, once: true } as TurboScript],
  }
}

// export default createHead(headConfig)
