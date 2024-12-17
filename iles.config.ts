import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'iles'
import type { LiveDesignerOptions } from '@pinegrow/vite-plugin'
import AutoImportAPIs from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import VueDevTools from 'vite-plugin-vue-devtools'
import { unheadComposablesImports } from 'unhead'

// import myIlesModule from './src/modules/my-module'

// import { visualizer } from 'rollup-plugin-visualizer'

import site from './src/site'
const { url: siteUrl } = site

export default defineConfig({
  siteUrl,

  extendFrontmatter(frontmatter, filename) {
    if (filename.includes('/posts/')) {
      frontmatter.layout = 'post'
    }
  },

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
          devtoolsKey: 'devtoolsKey', // see app.ts
          experimental: {
            editableFileTypes: ['.rc'],
          },
          tailwindcss: {
            configPath: 'tailwind.config.ts',
            cssPath: '@/assets/css/tailwind.css',
            // themePath: false, // Set to false so that Design Panel is not used
            // restartOnConfigUpdate: true,
            restartOnThemeUpdate: true,
          },
          // plugins: [
          //   {
          //     name: 'My Awesome Lib 3.0',
          //     key: 'my-awesome-lib',
          //     pluginPath: fileURLToPath(
          //       new URL('./web-types/my-awesome-lib.json', import.meta.url),
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

  // Update config as per your needs
  // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
  components: {
    /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

    // dirs: ['src/components'], // already included by iles

    // allow auto load markdown components under ./src/components/
    // extensions: ['vue', 'jsx', 'tsx', 'js', 'ts', 'mdx', 'svelte'] // already included by iles

    // allow auto import and register components used in markdown
    // include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.mdx?/] // already included by iles

    // resolvers: [], // Auto-import using resolvers

    // transformer: 'vue3', // already set by iles

    dts: 'components.d.ts',
  },

  // Update config as per your needs
  // For details, refer to https://iles.pages.dev/guide/plugins#islandspages

  /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
  // pagesDir: 'src/pages', // already set by iles

  // extendFrontmatter (frontmatter, filename) {
  //   //...
  // },
  // extendRoute (route) {
  //   //...
  // },
  // extendRoutes (routes) {
  //   //...
  // },

  vite: {
    plugins: [
      // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
      AutoImportAPIs({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
          /\.mdx$/, // .mdx
        ],
        imports: [
          'vue',
          // 'vue-router',
          // 'vue-i18n',
          // 'vue/macros',
          unheadComposablesImports[0],
          '@vueuse/core',
          'pinia',
        ],
        dirs: [
          /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
          'src/composables',
          'src/utils',
          'src/stores',
          '**/pg-*/**', // To auto-import composables from Vue Designer plugins.
        ],
        vueTemplate: true,
        dts: 'auto-imports.d.ts',
      }),
      Unocss({
        presets: [
          presetIcons({
            prefix: 'i-', // default prefix, do not change
          }),
        ],
        content: {
          pipeline: {
            include: ['./src/**/*'],
          },
        },
      }),
      VueDevTools(),
    ],

    // build: {
    //   // Vite uses Rollup under the hold, so rollup options & plugins can be used for advanced usage
    //   rollupOptions: {
    //     plugins: [visualizer()],
    //   },
    // },

    resolve: {
      alias: {
        /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
        /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '~~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  },
  //...
})
