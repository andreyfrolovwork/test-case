// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'My Awesome Online Store',
      meta: [
        { name: 'description', content: 'The best store on the web.' }
      ],
    }
  }
})