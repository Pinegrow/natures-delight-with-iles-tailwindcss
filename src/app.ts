// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtools = devtools
// }

import { defineApp } from 'iles'
import 'uno.css'
import '@/assets/css/tailwind.css'
import 'prismjs/themes/prism-tomorrow.css'
import { computed } from 'vue'
import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'
import type { Script } from '@unhead/schema'
type TurboScript = Script & { once: true }

import { pg_font_urls } from '~~/themes/pg-tailwindcss/tokens.mjs'

const link: any = [
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.svg',
  },
]
const noscript: any = []

if (pg_font_urls.length) {
  const googleapis = 'https://fonts.googleapis.com'
  const gstatic = 'https://fonts.gstatic.com'
  link.push(
    { rel: 'dns-prefetch', href: googleapis },
    { rel: 'dns-prefetch', href: gstatic },
    { rel: 'preconnect', crossorigin: 'anonymous', href: googleapis },
    { rel: 'preconnect', crossorigin: 'anonymous', href: gstatic },
    {
      rel: 'preload',
      as: 'style',
      onload: "this.onload=null;this.rel='stylesheet'",
      href: pg_font_urls.toString(),
    },
  )
  noscript.push(
    `<link rel="stylesheet" crossorigin="anonymous" href="${pg_font_urls.toString()}" />`,
  )
}

export default defineApp({
  head({ frontmatter, site }) {
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
      script: [{ innerHTML: checkDarkTheme, once: true } as TurboScript],
      link,
      noscript,
    }
  },
})
