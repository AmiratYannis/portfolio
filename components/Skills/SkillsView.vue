<template>
    <v-container class="skills primary" fluid>
        <h1 class="text-center  font-weight-bold mb-6 text-uppercase ma-2">{{$t("Technical Skills")}}</h1>


        <v-row class="ma-0 pa-0">
            <v-col v-for="(techno, index) in skills" :key="index" cols="12" md="6" lg="4" class="pa-2 custom-card">
                <SkillCardView :techno="techno" />
            </v-col>

        </v-row>



        <v-row class="d-flex justify-center mb-5">
            <v-btn @click="openResume" class=" text-uppercase ma-2 text-white px-2" rounded="1" outlined> {{$t("See my resume")}}
            </v-btn>
        </v-row>


    </v-container>

</template>

<script lang="ts">
import { Techno } from '@/types/projectTypes';
import { ref, onMounted } from 'vue';
import SkillCardView from '@/components/Skills/SkillsCards/SkillCardView.vue';
import { useI18n } from 'vue-i18n';



export default {
    components: {
        SkillCardView
    },
    setup() {
        const skills = ref<Techno[]>([])
        const {t}=useI18n()

        onMounted(async () => {
            try {
                const response = await fetch('/db/it_skills.json');

                skills.value = await response.json();
            } catch (error) {
                console.error("Error loading it_skills.json:", error)
            }
        });


        const openResume = (): void => {
            const documentUrl = t('CV Yannis Amirat 7 EN.pdf');
            window.open(documentUrl, '_blank');
        };

        return { openResume, skills }
    },
};
</script>
<style scoped>
.v-btn {

    background-color: #2b394c;

}

.custom-card {
    max-width: 300px;
}
</style>
