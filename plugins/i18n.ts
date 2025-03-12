import { createI18n } from 'vue-i18n';
import { defineNuxtPlugin } from '#app';

// Import JSON translation files
import en from '../i18n/locales/en.json';
import fr from '../i18n/locales/fr.json';

export default defineNuxtPlugin((nuxtApp) => {
    const i18n = createI18n({
        legacy: false,  // ✅ Required for Vue 3 & Nuxt 3
        globalInjection: true, // ✅ Ensures `$t()` works globally
        locale: 'en', // Default language
        fallbackLocale: 'en',
        messages: { en, fr }, // ✅ Load translations dynamically
    });

    nuxtApp.vueApp.use(i18n);
});
