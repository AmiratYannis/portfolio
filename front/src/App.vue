<template>
  <v-app>
    <v-main>
      <HeaderView />
      <IntroSection />
      <AboutView />
      <PortfolioView/>-
    </v-main>
  </v-app>
</template>

<script lang="ts">
import IntroSection from './components/Intro/IntroSection.vue';
import HeaderView from './components/Header/HeaderView.vue';
import AboutView from './components/About/AboutView.vue';
import PortfolioView from './components/Portfolio/PortfolioView.vue';

export default {
  name: 'App',

  components: {
    IntroSection,
    HeaderView,
    AboutView,
    PortfolioView,
  },

  data: () => ({
    //
  }),
}
</script>

<style scoped>
.v-main{
  background-color: #060e2e;
  color: white
}
</style>
