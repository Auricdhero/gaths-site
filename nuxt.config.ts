// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

// import graphql from "@rollup/plugin-graphql";
export default defineNuxtConfig({
  vite: {
    define: {
      "process.env.DEBUG": true,
      // plugins: [graphql()]
    },
  },
  // autoImports:{},
  
  // runtimeConfig: {
  //   public: {
  //     graphqlUrl: "http://localhost:1337/graphql",
  //   },
  // },
  css: [
    'assets/styles/bootstrap.scss',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  build: {
    transpile: ['vuetify'],
  },
  // hooks: {
  //   'vite:extendConfig': (config) => { }
  // },
  plugins: [
    { src: '~/plugins/bootstrap.js', mode:'client' }
  ],
  modules: [
    '@nuxtjs/apollo'
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    },
  },
  
  
  // strapi: {
  //   url: 'http://localhost:1337'
  // },
  devtools: { enabled: true }
})