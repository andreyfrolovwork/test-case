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
  },
  runtimeConfig: {
    // This key should be private, but it's mistakenly exposed to the client.
    public: {
      apiSecret: 'my-super-secret-key-123'
    }
  }
})