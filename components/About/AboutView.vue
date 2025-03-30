<template>
    <v-container class="about-section pt-10 pb-10" fluid>
        <v-row align="center" justify="center" class="text-center">
            <v-col cols="12" md="9">
                <h1 class="text-uppercase ma-2">{{$t("About me")}}</h1>
                <p class="about-text">
                    {{$t("Hello")}} ! {{$t("I am Yannis Amirat, a web developer passionate by new technologies.")}}
                     <br />
                    {{$t("Welcome to my website, where I share my experience and showcase my expertise in front-end and fullstack development.")}}
                    <br />
                    {{$t("Over the years, I’ve developed skills in JavaScript, TypeScript, Vue.js, React, Node.js, and Java by working on both fullstack and front-end projects.")}} <br />
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.about-section {
    /* background-color: #1e293b;*/
    background-color: #0f172d;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.about-text {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
}
</style>
