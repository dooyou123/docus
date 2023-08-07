export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',

    '@nuxtjs/axios'

  ]
  axios: {
    baseURL: 'https://api.example.com'
    // baseURL 설정 (예: 'https://api.example.com')
  },
})
