<template>
    <v-row justify="center" class="intro primary" fluid>
        <v-col cols="12" md="8" class="text-center">
            <h1 class="intro-title">YANNIS AMIRAT</h1>
            <p class="intro-subtitle">Web Developer </p>

            <p class="intro-mission">I'm looking for mission as <span class="typewriter">{{ currentMission }}</span></p>
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

<script lang="ts">

export default {
    data() {

        return {
            projects: [
                "Fullstack Developer",
                "Front-end Developer",
            ],
            currentMission: "",
            currentIndex: 0,
            isDeleting: false,
        };
    },
    methods: {
        type() {
            const currentText = this.projects[this.currentIndex];

            if (this.isDeleting) {
                this.currentMission = currentText.substring(0, this.currentMission.length - 1);
                // Get Mission mission that is deleting
            } else {
                this.currentMission = currentText.substring(0, this.currentMission.length + 1);
                // Get Next Mission that is writing
            }


            let typingSpeed = this.isDeleting ? 100 : 150;

            if (!this.isDeleting && this.currentMission === currentText) {
                typingSpeed = 2000;
                this.isDeleting = true;
            } else if (this.isDeleting && this.currentMission === "") {
                this.isDeleting = false;
                this.currentIndex = (this.currentIndex + 1) % this.projects.length;
                typingSpeed = 500;
            }

            setTimeout(() => this.type(), typingSpeed);
        },
    },
    mounted() {
        this.type();
    }




}

</script>

<style scoped>
.intro-title {
    font-size: 3rem;
    font-weight: bold;
}

.intro-subtitle {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.typewriter {
    font-weight: bold;
    color: whitesmoke;
    border-right: 2px solid whitesmoke;
    animation: blink 0.7s steps(2) infinite;
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

@keyframes blink {
    0% {
        border-color: transparent;
    }

    50% {
        border-color: whitesmoke;
    }

    100% {
        border-color: transparent;
    }
}
</style>