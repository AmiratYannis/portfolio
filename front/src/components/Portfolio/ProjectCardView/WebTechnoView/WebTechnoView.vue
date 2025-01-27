<template>
    
    <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
            <v-avatar size="40" v-bind="props">
                <v-img :src="techno.icon" :alt="techno.name"></v-img>
            </v-avatar>
        </template>
        <span>{{ techno.name }}</span>
    </v-tooltip>
</template>


<script setup lang="ts">

import { defineProps } from 'vue';
import {Techno } from '@/types/projectTypes';

defineProps<{techno: Techno}>()



</script>