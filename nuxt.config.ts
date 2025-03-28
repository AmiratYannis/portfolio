export default defineNuxtConfig({
  css: ['vuetify/styles'],

  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css" }
      ]
    }
  },

  build: {
    transpile: ['vuetify'], // ✅ Fix CSS import issue
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    server: {
      watch: {
        ignored: ['!**/i18n/locales/*.json'] // ✅ Force Vite to watch JSON files
      }
    }
  },

  nitro: {
    routeRules: {
      "/api/**": {
        cors: true, // Enable API access from frontend
      }
    }
  },

  runtimeConfig: {
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
    AWS_REGION: process.env.AWS_REGION,
    ZOHO_SECRET_NAME: process.env.ZOHO_SECRET_NAME,
    MAIL_USER: process.env.MAIL_USER,
    OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET,
    OAUTH_REFRESH_TOKEN: process.env.OAUTH_REFRESH_TOKEN,
    public: {
      API_BASE: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },
  compatibilityDate: "2025-03-05",
  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap'],

  i18n: {
    lazy: true,
    langDir: 'i18n/locales/',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: './i18n/i18n.config.ts'
  },

  sitemap: {
    siteUrl: 'https://yamirat.com',
    gzip: true,
    trailingSlash: false,
  },
});