<template>

    <v-card class="project-card mx-auto mb-10" elevation="4">

        <v-img v-if="project.banner !== ''" :src="project.banner" width="400" height="400" cover></v-img>


        <v-card-title class="text-center pt-5">
            <h2 class="font-weight-bold">{{ project.title }}</h2>
        </v-card-title>


        <v-card-subtitle class="text-center px-4 project-desc">
            {{ $t(project.description) }}
        </v-card-subtitle>

        <v-card-text class="text-center">
            <h3 class="text-subtitle-1 font-weight-bold mb-2">{{$t("Technologies used")}}:</h3>
            <v-row justify="center">
                <v-col v-for="techno in project.technologies" :key="techno.name" cols="auto"
                    class="d-flex flex-column align-center">
                    <WebTechnoView :techno="techno" />
                </v-col>

            </v-row>


        </v-card-text>

        <v-card-actions class="d-flex justify-center pb-5">

            <v-btn class="px-2" v-if="project.url" :href="project.url" target="_blank" variant="tonal" rounded="1">
                {{$t("Go to website")}}
            </v-btn>
            <v-btn :href="project.githubUrl" target="_blank" icon color="black">
                <v-icon>mdi-github</v-icon>
            </v-btn>
        </v-card-actions>





    </v-card>

</template>


<script setup lang="ts">

import { defineProps } from 'vue';
import { Project } from '@/types/projectTypes';
import WebTechnoView from '@/components/Portfolio/ProjectCardView/WebTechnoView/WebTechnoView.vue';




defineProps<{ project: Project }>();


</script>

<style scoped>
.project-card {
    background-color: #2b394c;
    color: white;
    transition: transform 0.3s ease-in-out;
    max-width: 400px;
    margin-left: 20px;
    margin-right: 20px;

}

.project-card:hover {
    transform: scale(1.05);
}


.project-desc {
    white-space: normal;
    overflow: visible;
    word-wrap: break-word;
    max-width: 90%;
    text-align: center;
    padding-bottom: 10px;
}

.v-icon {
    color: white;
}
</style>