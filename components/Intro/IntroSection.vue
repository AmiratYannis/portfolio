<template>
    <v-row justify="center" class="intro primary" fluid>
        <v-col cols="12" md="8" class="text-center">
            <h1 class="intro-title">YANNIS AMIRAT</h1>
            <p class="intro-subtitle">{{  $t("Fullstack developer")}} </p>

            <v-row justify="center" class="social-icons">
                <a href="https://www.linkedin.com/in/yannis-amirat-968386175/" target="_blank" class="linkedin">
                    <v-icon :icon="'mdi-linkedin'" size="30px"></v-icon>

                </a>
                <a href="https://github.com/AmiratYannis" target="_blank" class="github">
                    <v-icon :icon="'mdi-github'" size="30px"></v-icon>
                </a>

            </v-row>
        </v-col>


    </v-row>
</template>


<style scoped>
.intro-title {
    font-size: 3rem;
    font-weight: bold;
}

.intro-subtitle {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.social-icons {
    margin-top: 20px;
}

.v-icon {
    margin: 0 10px;
    cursor: pointer;
}



a {
    text-decoration: none;
}

.github {
    color: white;
}

.linkedin {
    color: #1e88e5;
}


</style>