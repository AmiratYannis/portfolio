<template>
  <v-app>
    <HeaderView />
    <v-main class="main">
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<style>
.main {
  padding-top: 64px; 
  background-color: #030c2a; 
  min-height: 100vh;
  overflow-x: hidden;
}
</style>