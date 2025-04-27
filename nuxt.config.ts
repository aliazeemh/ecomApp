// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ],
  css: [
    '@ionic/core/css/ionic.bundle.css',
  ],
  build: {
    transpile: ['@ionic/vue', '@ionic/vue-router'],
  },
  runtimeConfig: {
    pwa: {
      manifest: {
        name: 'Elryan',
        short_name: 'elryan',
        lang: 'en',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '/manifest/ElRyan.ico',
            sizes: '128x128',
            type: 'image/icon'
          }
        ]
      },
      meta: {
        theme_color: '#ffffff',
      },
      workbox: {
        offlineAnalytics: true,
        runtimeCaching: [
          {
            urlPattern: 'http://localhost:3001/*',
            handler: 'NetworkFirst',
            method: 'GET',
          }
        ]
      }  
    }
  }
})