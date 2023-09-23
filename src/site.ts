const image = new URL('./screenshots/image.png', import.meta.url).href

export default {
  title: `Nature's Delight`,
  description: 'Healthy Organic Products',
  image,
  author: 'Pinegrow',
  url: 'https://natures-delight-with-iles-tailwindcss.netlify.app',
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Articles', link: '/articles' },
    { text: 'Blog', link: '/blog' },
    { text: 'Contact Us', link: '/contact-us' },
  ],
}
