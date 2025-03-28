<template>
    <v-app-bar flat color="primary" dark app  height="64" scroll-behavior="none" elevate-on-scroll class="fixed-app-bar">
        <v-container>
            <v-row align="center" class="justify-space-between">
                <v-col class="d-flex align-center" cols="auto">
                    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
                    <v-btn class="logo-btn" variant="text" @click="refreshPage">
                        <v-img
                        src="https://t4.ftcdn.net/jpg/04/03/45/35/240_F_403453559_s9TR8B6lvXNkvWM69ZJr0hlkxidbf6cN.jpg"
                        height="42"
                        width="70"
                        alt="Logo"
                        />
                    </v-btn>
                    
                    <div class="hidden-md-and-up ms-2">
                        <v-btn icon @click="switchLanguage('en')">
                            <v-img src="/flags/ukusa.jpg" height="24" width="30" />
                        </v-btn>
                        <v-btn icon @click="switchLanguage('fr')">
                            <v-img src="/flags/france.png" height="24" width="30" />
                        </v-btn>
                    </div>
                </v-col>
                
                <v-col cols="auto" class="desktop-nav">
                    <v-btn class="text-uppercase mx-2" variant="text" @click="scrollToSection('about-section')">{{ $t("About") }}</v-btn>
                    <v-btn class="text-uppercase mx-2" variant="text" @click="scrollToSection('portfolio')">Portfolio</v-btn>
                    <v-btn class="text-uppercase mx-2" variant="text" @click="scrollToSection('skills')">{{ $t("skills") }}</v-btn>
                    <v-btn class="text-uppercase mx-2" variant="text" @click="scrollToSection('contact')">Contact</v-btn>
                    <v-btn icon class="mx-2" @click="switchLanguage('en')">
                        <v-img src="/flags/ukusa.jpg" height="24" width="30" alt="EN" />
                    </v-btn>
                    <v-btn icon class="mx-2" @click="switchLanguage('fr')">
                        <v-img src="/flags/france.png" height="24" width="30" alt="FR" />
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
    
    <v-navigation-drawer
    v-model="drawer"
    temporary
    location="top"
    class="hidden-md-and-up mobile-nav"
    >
    <v-list nav>
        <v-list-item @click="scrollToSection('about-section')">
            <v-list-item-title class="text-white text-uppercase">{{ $t("About") }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="scrollToSection('portfolio')">
            <v-list-item-title class="text-white text-uppercase">Portfolio</v-list-item-title>
        </v-list-item>
        <v-list-item @click="scrollToSection('skills')">
            <v-list-item-title class="text-white text-uppercase">{{ $t("skills") }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="scrollToSection('contact')">
            <v-list-item-title class="text-white text-uppercase">Contact</v-list-item-title>
        </v-list-item>
    </v-list>
</v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const drawer = ref(false)
const { locale } = useI18n()


const switchLanguage = (lang) => {
    locale.value = lang; 
};


const scrollToSection = (sectionClass) => {
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

const refreshPage = () => {
    window.location.reload();
};
</script>

<style scoped>
.fixed-app-bar {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  height: 64px !important;
  display: flex;
  align-items: center;
  box-shadow: none;
}

.logo-btn {
    background-color: transparent !important;
    box-shadow: none !important;
    transition: none !important;
}

.logo-btn:hover {
    background-color: transparent !important;
    box-shadow: none !important;
}

.v-btn {
    background-color: transparent !important;
}

.mobile-nav {
    background-color: #030c2a !important;
    color: white;
    position: fixed !important;
    top: 64px; 
    left: 0;
    width: 100%;
    overflow-y: auto;
}


.v-list-item-title {
    font-weight: bold;
    font-size: 1rem;
}

.v-img {
    vertical-align: middle;
    border-radius: 3px;
}

@media (max-width: 960px) {
    .desktop-nav {
        display: none !important;
    }
}

.logo-btn {
  margin-top: 4px;
}
</style>