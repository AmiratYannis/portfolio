import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { md3 } from "vuetify/blueprints"; // ✅ Ensure Material 3 icons
import { aliases, mdi } from "vuetify/iconsets/mdi"; // ✅ Load MDI Icons
import { defineNuxtPlugin } from "#app";
import "vuetify/styles";
import '@mdi/font/css/materialdesignicons.css'


export default defineNuxtPlugin((nuxtApp) => {
    if (import.meta.client) {
        import("webfontloader").then((WebFont) => {
            WebFont.load({
                google: {
                    families: ["Roboto:100,300,400,500,700,900&display=swap"],
                },
            });
        });
    }

    const vuetify = createVuetify({
        components,
        directives,
        blueprint: md3, // ✅ Use Material Design 3
        icons: {
            defaultSet: "mdi", // ✅ Enable MDI icons
            aliases,
            sets: { mdi },
        },
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: "#060e2e"

                    }
                },
            },
        },
    });

    nuxtApp.vueApp.use(vuetify);
});