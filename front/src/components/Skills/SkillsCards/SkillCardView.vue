<template>
    <v-card class="skill-card d-flex justify-center" max-width="100%" max-height="100%">
        <WebTechnoView class="ml-16" :techno="techno"/>
        
        <v-card-text class="ml-2">
            <h3 class="text-white font-weight-bold">{{ techno.name }}</h3>
        </v-card-text>    
        
    </v-card>
    
    
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import {Techno} from '@/types/projectTypes';
import WebTechnoView from '@/components/Portfolio/ProjectCardView/WebTechnoView/WebTechnoView.vue';

defineProps<{techno: Techno}>();



</script>

<style scoped>
.skill-card {
  background-color: #2b394c;
  color: white;
  border-radius: 13px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: flex;
  align-items: center;        /* Vertically center icon and text */
  justify-content: center;

  padding: 10px;
  min-height: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  gap: 6px;     
}

.skill-card:hover {
  box-shadow: 0 8px 16px rgb(6, 16, 70);
  
}

</style>