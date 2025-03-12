import en from './i18n/locales/en.json';
import fr from './i18n/locales/fr.json'

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
    OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET,
    OAUTH_REFRESH_TOKEN: process.env.OAUTH_REFRESH_TOKEN,
    MAIL_USER: process.env.MAIL_USER,
    public: {
      API_BASE: 'http://localhost:3000',
    },
    nitro: {
      routeRules: {
        "/api/**": { cors: true },
      }
    }
  },
  compatibilityDate: "2025-03-05",
  modules: ['@nuxtjs/i18n'],

  i18n: {
    lazy: true,
    langDir: 'i18n/locales/',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: './i18n/i18n.config.ts' // ✅ Use external Vue I18n config
  }
});