<template>
    <v-app-bar flat color="primary" dark>
        <v-container>
            <v-row align="center">
                <v-col class="d-flex align-center ma-2">
                    <router-link to="/">
                        <v-img src="https://t4.ftcdn.net/jpg/04/03/45/35/240_F_403453559_s9TR8B6lvXNkvWM69ZJr0hlkxidbf6cN.jpg" class="logo ma-2" height="60" width="60" contain></v-img>
                    </router-link>


                </v-col>

                <v-col class="d-flex justify-end">
                    <v-btn class="text-uppercase ma-2" :to="'/#about'">About</v-btn>
                    <v-btn class="text-uppercase ma-2" :to="'/#portfolio'">Portfolio</v-btn>
                    <v-btn class="text-uppercase ma-2" :to="'/#skills'">skills</v-btn>
                    <v-btn class="text-uppercase ma-2" :to="'/#contact'">
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
}
</script>

