// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: "Nature's Delight",
  description: 'Healthy Organic Products',
  logo: 'i-vscode-icons:file-type-coffeelint',
  author: 'Pinegrow',
  url: 'https://natures-delight-with-iles-tailwindcss.netlify.app',
  github: 'https://github.com/pinegrow/natures-delight-with-iles-tailwindcss',
  ogImageUrl: 'og-image.jpg', // absolute url (or) from public folder
  generator: 'https://vuedesigner.com',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [
      { title: 'Home', icon: 'i-mdi-home', to: '/' },
      { title: 'Articles', icon: 'i-mdi-home', to: '/articles' },
    ],
    secondary: [
      { title: 'Blog', icon: 'i-mdi-home', to: '/blog' },
      { title: 'Contact Us', icon: 'i-mdi-home', to: '/contact-us' },
    ],
  },
}
