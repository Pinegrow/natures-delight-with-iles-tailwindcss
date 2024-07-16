# Nature's Delight - Islands of Interactivity with Iles and Tailwind CSS!

Jamstack (MPA-SSG) app for an fresh & organic fictional store implementing Islands Architecture, statically generated articles fetched from an external REST API source, a blog authored with markdown files, and everything styled with the power and beauty of Tailwind CSS. This app is built into a static site, and can be easily deployed to a CDN with excellent SEO.

This is a sample project created using the [Vue Designer îles Tailwind CSS - Quick start template](https://github.com/pinegrow/pg-iles-tailwindcss).

Demo - https://natures-delight-with-iles-tailwindcss.netlify.app

## Vue Designer

A desktop visual editor for Vue apps supporting Mac, Windows, and Linux by [Pinegrow](https://pinegrow.com/). Take it for a free trial at [Vue Designer](https://vuedesigner.com)!

It lets you visually design 🎨 your Vue single file components and boosts your productivity and creativity while building your component-based Vue apps.

It smartly integrates with your ⚡️ [Vite](https://vitejs.dev/) based CLI and provides an amazing developer experience with its powerful visual controls and features.

Clean code 😃, No lock-in - You are in control of your projects and development workflow ❤️

## Try it now!

### 1. Clone to local

[Create a repo from this template on GitHub](https://github.com/pinegrow/natures-delight-with-iles-tailwindcss/generate).

(or)

If you prefer to do it manually with the cleaner git history

```bash
npx giget@latest gh:pinegrow/natures-delight-with-iles-tailwindcss my-natures-delight-with-iles-tailwindcss #project-name
cd my-natures-delight-with-iles-tailwindcss
npm install #or use pnpm
```

## 2. Open in Vue Designer

Open your project in Vue Designer and follow the instructions displayed in the Config Panel (that should pop out automatically). Config Panel ⚙️ displays the key packages and the various links to their individual ecosystems and communities.

## Usage

### Start your development server

```bash
npm run dev # SPA during development
```

### Build

```bash
npm run build # MPA SSG (islands architecture)
```

### Analyze

Uncomment the `rollup-plugin-visualizer` usage in your config file and execute the `build` command. This command will generate `stats.html`. Open `stats.html` in your browser to analyze bundle sizes.

```bash
npm run build # open stats.html to analyze bundle sizes
```

### Preview

```bash
npm run now # build & preview
```

### Lighthouse

```bash
npm run unlighthouse # Uses npx unlighthouse from https://unlighthouse.dev/ to run lighthouse on entire site (all pages)
```

### Deploy to Netlify

You can deploy this repo as a site on your own to explore and experiment with, by clicking this button.
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Pinegrow/natures-delight-with-iles-tailwindcss)

Check out the [deployment documentation](https://iles.pages.dev/guide/deployment) for more information.

## Pre-packed

### Meta Framework (Vue-based)

- [îles](https://iles.pages.dev/) - A Joyful Site Generator.
  - 🏝 **[Partial Hydration]** - zero JS by default, hydrates the interactive bits
  - 🔌 **[Batteries Included]** - layouts, components, site-wide data
  - 🧱 **[Multi-Framework]** - vue, preact, svelte, solid
  - 📖 **[Markdown]** - use components in markdown and viceversa
  - 🛣 **[Routing]** - automatically configured from files
  - 🛠 **[Devtools][devtools]** - debug panel and [hydration timeline]
  - ⚡️ **[Fast][vite]** - instant reloading powered by [Vite]

### UI Frameworks

- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite#vue) - The amazing utility-first CSS framework.

### File-based CMS (markdown)

- [@islands/mdx](https://github.com/ElMassimo/iles/tree/main/packages/mdx) - file-based CMS powered by Markdown & Vue components. Note: This page is a markdown file 🗒.
- [@islands/excerpt](https://github.com/ElMassimo/iles/tree/main/packages/excerpt) - an îles module to extract an excerpt from MDX documents.
- [@islands/headings](https://github.com/ElMassimo/iles/tree/main/packages/headings) - an îles module that injects a rehype plugin to parse headings in MDX documents.
- [@islands/prism](https://github.com/ElMassimo/iles/tree/main/packages/prism) - an îles module that injects a remark plugin to provide syntax highlighting for MDX documents.

### Icons

- [UnoCSS Preset Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - use over 100,000 open-source [Iconify](https://iconify.design/) icons. Uses the **unocss** format for icon names, for example, `i-mdi-home`.

### Modules/Plugins

- [Pinegrow îles Module](https://www.npmjs.com/package/@pinegrow/iles-module) - enables you to live-design your Vue single-file components visually in Vue Designer.
- [Pinegrow Tailwind CSS Plugin](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) - via Design Panel, enables visual controls customization (automatic) and theme customization (optional).
- [@islands/pages](https://iles.pages.dev/guide/plugins#islandspages) - enables file-based routing, hooks to extend frontmatter and route data, supports a <page> block in Vue single-file components for meta-data. This module is shipped inside îles.
- 📲 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - On-demand components auto importing for Vue.
- 📲 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - Auto import APIs on-demand for Vite, Webpack and Rollup.
- [VueUse](https://vueuse.org/) - collection of essential Vue composition utilities.
- 🍍 [Pinia](https://pinia.vuejs.org/) stores for global state management. Its light-weight, type-safe, extensible, modular with vue-devtools support.
- [VeeValidate](https://vee-validate.logaretm.com/v4/) takes care of value tracking, validation, errors, submissions and more.

### Devtools

- [îles Devtools](https://iles.pages.dev/guide/development#devtools) - Page information is available in the in-app debug panel (similar to Vitepress). Also access the "Islands" inspector in Vue devtools.
- [Vite Devtools](https://devtools-next.vuejs.org/guide/vite-plugin) - A Vite plugin for Vue that enhances your DX (developer experience) with an amazing set of in-app features. This is an in-app alternative to browser-based/standalone Vue Devtools.
- [Vue Devtools](https://devtools.vuejs.org/guide/installation.html#standalone) - Official devtools that can be used as a standalone app alongside Vue Designer. It's conditionally configured in `app.ts` (only during development).
  - **ACTION REQUIRED**: Currently deactivated. In `app.ts`, uncomment the top devtools related snippet to activate.

### VS Code Extensions

- [VS Code Extensions](./.vscode/extensions.json & ./.vscode/settings.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://vuejs.org/guide/scaling-up/sfc.html)
- [ESLint](https://eslint.org) with [@nuxt/eslint-config](https://github.com/nuxt/eslint-config) - opinionated not-so-strict set of linting rules. Nuxt & îles share a similar directory structure, so are their linting rules.
- [Prettier](https://prettier.io) with [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - format without conflicting with eslint rules.

### Typescript

This project allows JS, and strict mode is turned off. Update `tsconfig.ts` as required.

```json
{
  "compilerOptions": {
    // ...
    "strict": false,
    "allowJs": true
  }
}
```

## Community

- [Vue Designer Community](https://discord.gg/BYp45Nnu5T)
