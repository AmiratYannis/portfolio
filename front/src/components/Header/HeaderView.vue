<template>
    <v-app-bar flat color="primary" dark>
        <v-container>
            <v-row align="center">
                <v-col class="d-flex align-center ma-2 mb-10">
                    <v-btn class="logo" variant="text" @click="refreshPage">
                        <v-img
                            src="https://t4.ftcdn.net/jpg/04/03/45/35/240_F_403453559_s9TR8B6lvXNkvWM69ZJr0hlkxidbf6cN.jpg"
                            class="ma-2" height="52" width="80"></v-img>
                    </v-btn>


                </v-col>

                <v-col class="d-flex justify-end">
                    <v-btn class="text-uppercase ma-2" @click="scrollToSection('about-section')">About</v-btn>
                    <v-btn class="text-uppercase ma-2" @click="scrollToSection('portfolio')">Portfolio</v-btn>
                    <v-btn class="text-uppercase ma-2" @click="scrollToSection('skills')">skills</v-btn>
                    <v-btn class="text-uppercase ma-2" @click="scrollToSection('contact')">
                        Contact
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script lang="ts">
export default {
    name: 'HeaderView',
    methods: {
        scrollToSection(sectionClass) {
            const section = document.querySelector(`.${sectionClass}`); // Select by class name
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        },
        refreshPage() {
            window.location.reload(); 
        }
    }
}
</script>

<style scoped>
.logo {
  transition: none !important;        /* Disable all transitions */
  background-color: transparent !important;  /* Remove background hover effect */
  box-shadow: none !important;        /* Remove shadow effect */
}

.logo:hover {
  background-color: transparent !important;  /* No color change on hover */
  box-shadow: none !important;               /* No shadow on hover */
}

.v-btn{
      background-color: transparent !important;  /* No color change on hover */

}
</style>