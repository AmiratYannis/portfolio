import { createI18n } from 'vue-i18n';

// Import JSON files
import en from './locales/en.json';
import fr from './locales/fr.json';

export default defineI18nConfig(() => {
    return createI18n({
        legacy: false, // ✅ Required for Nuxt 3
        locale: 'en', // Default language
        fallbackLocale: 'en',
        messages: { en, fr } // ✅ Load translations dynamically
    });
});