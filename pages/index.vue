<template>
    <div>
        <HeaderView />
        <IntroSection />
        <AboutView />
        <PortfolioView />
        <SkillsView />
        <ContactForm />
    </div>
</template>

<script setup>
import { useHead } from 'nuxt/app';

useHead({
    title: 'Yannis Amirat',
    meta: [
        {
            name: 'description', content: "You've arrived at my website, which features my personal and professional projects. I am a full-stack web developer specialized in Vue.js, Node.js."
        },
        { name: 'keywords', content: 'Yannis Amirat, Yannis, Amirat, Node.js, Vue.js, Web Developer, Frontend, Portfolio' },
        { property: 'og:title', content: 'Yannis Amirat' },
        { property: 'og:description', content: "You've arrived at my website, which features my personal and professional projects." },
        { property: 'og:image', content: 'https://t4.ftcdn.net/jpg/04/03/45/35/240_F_403453559_s9TR8B6lvXNkvWM69ZJr0hlkxidbf6cN.jpg' },
        { property: 'og:url', content: 'https://yamirat.com' },
    ],
    link: [
        { rel: 'icon', type: 'image/jpg', href: 'https://t4.ftcdn.net/jpg/04/03/45/35/240_F_403453559_s9TR8B6lvXNkvWM69ZJr0hlkxidbf6cN.jpg' }, // PNG icon
    ]
});
</script>

<style setup>
.v-btn {
    color: white !important;
    background-color: #2b394c !important;
}

.primary {
    background: #060e2e;
    color: white;
    padding: 100px 0;
}
</style>
