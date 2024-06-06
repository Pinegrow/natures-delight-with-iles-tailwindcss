// https://iles.pages.dev/guide/plugins#authoring-a-module
// https://github.com/ElMassimo/create-iles-module

import type { IlesModule } from 'iles'

/**
 * An iles module that...
 */
export default function (): IlesModule {
  return {
    name: '_PACKAGE_NAME_',
    // Just like in Vite plugins you can use this hook to extend the user config

    // config (config) {
    //   return {}
    // },

    // If you need to do something once all modules have been resolved, you can
    // use this hook to get access to the final configuration.

    // configResolved (config) {
    //   let a = config.root
    // },

    // You may also directly provide other configuration options for îles or
    // the default Vite plugins.

    // components: {
    //   resolvers: [],
    // },

    // markdown: {
    //   remarkPlugins: [],
    //   rehypePlugins: [],
    // },
  }
}
