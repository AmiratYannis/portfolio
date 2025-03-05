export default defineNuxtConfig({
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
  },

  compatibilityDate: "2025-03-05"
});