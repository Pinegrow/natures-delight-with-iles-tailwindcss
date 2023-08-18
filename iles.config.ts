import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'iles'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
// import VueDevTools from 'vite-plugin-vue-devtools'
import type { LiveDesignerOptions } from '@pinegrow/vite-plugin'
import AutoImportAPIs from 'unplugin-auto-import/vite'

export default defineConfig({
  extendFrontmatter(frontmatter, filename) {
    if (filename.includes('/posts/')) {
      frontmatter.layout = 'post'
    }
  },
  siteUrl: 'https://natures-delight-with-iles-tailwindcss.netlify.app',
  // turbo: true,
  jsx: 'preact', // 'solid', 'react', 'vue'
  svelte: true,
  modules: [
    // 'prismjs/themes/prism-tomorrow.css' via app.ts
    '@islands/prism',
    '@islands/feed',
    ['@islands/excerpt', { maxLength: 140 }],
    '@islands/headings',
    [
      '@pinegrow/iles-module',
      {
        liveDesigner: {
          iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names
          devtoolsKey: 'devtools', // see app.ts
          tailwindcss: {
            configPath: 'tailwind.config.ts',
            cssPath: '@/assets/css/tailwind.css',
          },
          // plugins: [
          //   {
          //     name: 'My Awesome Lib 3.0',
          //     key: 'my-awesome-lib',
          //     pluginPath: fileURLToPath(
          //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
          //     ),
          //   },
          // ],
        } as LiveDesignerOptions,
      },
    ],
    //...
  ],
  markdown: {
    rehypePlugins: [
      [
        'rehype-external-links',
        {
          target: '_blank',
          rel: ['noopener'],
          test: (node: any) => /^https?:\/\//.test(node.properties.href),
        },
      ],
    ],
  },
  vite: {
    resolve: {
      alias: {
        '~~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
    plugins: [
      Unocss({
        presets: [
          presetIcons({
            prefix: 'i-', // default prefix, do not change
          }),
        ],
      }),
      // VueDevTools(),
      // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
      AutoImportAPIs({
        include: [
          /.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /.vue$/,
          /.vue?vue/, // .vue
          /.md$/, // .md
        ],
        imports: [
          'vue',
          // 'vue-router',
          // 'vue-i18n',
          // 'vue/macros',
          // '@vueuse/head',
          // '@vueuse/core',
          // 'pinia',
        ],
        dirs: [
          // 'src/composables',
          // 'src/stores',
        ],
        vueTemplate: true,
        dts: 'auto-imports.d.ts',
      }),
    ],
  },
  //...
})
