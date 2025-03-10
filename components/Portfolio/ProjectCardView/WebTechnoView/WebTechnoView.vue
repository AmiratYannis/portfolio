<template>

    <v-avatar size="40" :rounded="isRounded(techno.name) ? '1' : '0'">
        <v-img :src="techno.icon" :alt="techno.name"></v-img>
    </v-avatar>

</template>


<script setup lang="ts">

import { defineProps } from 'vue';
import { Techno } from '@/types/projectTypes';

defineProps<{ techno: Techno }>()

const roundedTechs = ['Javascript', 'Typescript', 'Tailwind CSS'];

const isRounded = (techName: string): boolean => {
    return roundedTechs.includes(techName);
};



</script>
<style scoped>
.v-avatar {
    margin-right: 10px;
}
</style>