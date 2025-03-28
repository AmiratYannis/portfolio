<template>

    <v-container class="contact d-flex flex-column align-center text-center" fluid>
        <h1 class="font-weight-bold mb-6 text-uppercase ma-2">Contact</h1>


        <v-row>
            <v-col cols="12" md="2">
                <v-card class="mt-2  contact-icon ">
                    <v-list-item>
                        <v-btn href="https://www.linkedin.com/in/yannis-amirat-968386175/" target="_blank" rounded="0">
                            <v-icon :icon="'mdi-linkedin'" size="30px" class="linkedin mr-10"></v-icon>
                        </v-btn>
                    </v-list-item>
                    <v-list-item>

                        <v-btn href="mailto:me@yamirat.com" rounded="0">
                            <v-icon :icon="'mdi-email'" size="30px" class="email mr-10"></v-icon>

                        </v-btn>


                    </v-list-item>
                    <v-list-item>
                        <v-btn href="https://wa.me/33611037975" target="_blank" rounded="0">
                            <v-icon :icon="'mdi-whatsapp'" class="whatsapp mr-10" size="30px"></v-icon>
                        </v-btn>

                    </v-list-item>
                </v-card>
            </v-col>
            <v-col cols="12" md="10">
                <v-card class="pa-5 mt-2 mb-2 contact-form">
                    <p class="text-center text-h5 font-weight-bold  mb-6 ma-2">{{$t("Do you want to discuss a project?")}} </p>
                    <v-form @submit.prevent="sendMessage" class="form-container">
                        <v-text-field v-model="contact.name"  :placeholder="t('Name')" class="custom-field" />
                        <v-text-field v-model="contact.email" placeholder="E-mail" class="custom-field" />
                        <v-textarea v-model="contact.message" placeholder="Message" class="custom-field" />
                        <v-row class="d-flex justify-center">
                            <v-btn type="submit" class=" text-uppercase ma-2 mb-2 text-white px-2-" color="#2b394c-"
                                rounded="1" outlined>{{$t("Send")}}</v-btn>

                        </v-row>
                    </v-form>
                </v-card>


            </v-col>
        </v-row>
    </v-container>

</template>

<script lang="ts">
import { ref, reactive } from "vue";
import axios from 'axios';
import {useI18n} from 'vue-i18n';

export default {
    setup() {
        const { t } = useI18n(); // ✅ Correctly call useI18n() at the top of setup()
        
        const contact = reactive({
            name: "",
            email: "",
            message: "",
        });

        const successMessage = ref("");
        const errorMessage = ref("");

        const sendMessage = () => {
            successMessage.value = "";
            errorMessage.value = "";

            axios.post("https://yamirat.com/api/contact", contact)
                .then((res) => {
                    if (res.status === 200) {
                        console.log("success: Your message has been sent successfully!");
                        successMessage.value = t("Your message has been sent successfully!"); 
                        contact.name = "";
                        contact.email = "";
                        contact.message = "";
                    } else {
                        console.log("error: Your message failed to send");
                        errorMessage.value = t("Your message failed to send"); 
                    }
                })
                .catch((err) => {
                    console.log(`Network error. Please try again!  error: ${err.message}`);
                    errorMessage.value = t("Network error. Please try again."); 
                });
        };

        return { contact, successMessage, errorMessage, sendMessage, t }; 
    }
};


</script>

<style>
.contact {
    background: #0f172d;
    color: white;
}



.form-container {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
}

.custom-field {
    width: 100%;
}

.custom-field textarea {
    padding-top: 15px !important;
}



.v-btn {

    background-color: #2b394c;

}

.contact-icon {
    width: 60px;
    background: #2b394c;
}

.contact-form {
    background-color: #060e2e;
    color: white;
    margin-left: 10px
}

@media only screen and (max-width: 950px) {
    .contact-icon {
        margin-left: 40%;
    }

    .contact-form {
        margin-left: 2px
    }
}


.v-icon {
    width: 100px;
}

.linkedin {
    color: #2D79C7
}

.email {
    color: white
}

.whatsapp {
    color: rgb(9, 191, 9)
}
</style>