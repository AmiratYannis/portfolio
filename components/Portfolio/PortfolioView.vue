<template>
    <v-container class="portfolio primary" fluid>

        <h1 class="text-center  font-weight-bold mb-6 text-uppercase ma-2">PORTFOLIO</h1>

        <p class="portfolio-desc text-center"> Here, you can consult all the recent personnal and professionnal projects
            that I developped. </p>



        <v-row>
            <v-col v-for="(project, index) in projects" :key="index" cols="12" md="6" lg="4">
                <ProjectCardView :project="project" />
            </v-col>


        </v-row>

    </v-container>

</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { Project } from '@/types/projectTypes';
import ProjectCardView from '@/components/Portfolio/ProjectCardView/ProjectCardView.vue';





const projects = ref<Project[]>([]);



onMounted(async () => {
    try {
        const response = await fetch('/db/projects.json');
        projects.value = await response.json();
    } catch (error) {
        console.error("Error loading projects.json:", error);
    }
})

</script>


<style scoped>
.portfolio {
    background: #1e293b;
    color: white;
    padding: 100px 0;
    width: 100%;

}

.portfolio-desc {
    font-size: 1.2rem;
    margin-bottom: 20px;


}

.project-card {
    transition: transform 0.3s ease-in-out;
    max-width: 400px;
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
</style>