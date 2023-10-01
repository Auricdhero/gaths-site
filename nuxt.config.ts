// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  css: [
    'assets/styles/bootstrap.scss',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',  
    // 'assets/scss/index.scss'
  ],

  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => { }
  },
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],
  modules: ['@nuxtjs/strapi'],
  // strapi: {
  //   url: 'http://localhost:1337'
  // },
  devtools: { enabled: true }
})