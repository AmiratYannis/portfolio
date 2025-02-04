<template>
    <v-app-bar flat color="primary" dark>
        <v-container>
            <v-row align="center">
                <v-col class="d-flex align-center ma-2">
                    <v-btn icon @click="refreshPage">
                        <v-img
                            src="https://t4.ftcdn.net/jpg/04/03/45/35/240_F_403453559_s9TR8B6lvXNkvWM69ZJr0hlkxidbf6cN.jpg"
                            class="logo ma-2" height="60" width="60" contain></v-img>
                    </v-btn>


                </v-col>

                <v-col class="d-flex justify-end">
                    <v-btn class="text-uppercase ma-2" @click="scrollToSection('about-section')">About</v-btn>
                    <v-btn class="text-uppercase ma-2" @click="scrollToSection('portfolio')">Portfolio</v-btn>
                    <v-btn class="text-uppercase ma-2" @click="scrollToSection('skills')">skills</v-btn>
                    <v-btn class="text-uppercase ma-2" :to="'.contact'">
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
