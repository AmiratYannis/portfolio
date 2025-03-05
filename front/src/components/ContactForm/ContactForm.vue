<template>
    
    <v-container class="contact d-flex flex-column align-center text-center" fluid>
             <h1 class="font-weight-bold mb-6 text-uppercase ma-2">Contact</h1>


            <v-row>
            <v-col cols="12" md="2">
                <v-card class="mt-15 mr-10 contact-icon">
                    <v-list-item>
                        <v-btn href="https://www.linkedin.com/in/yannis-amirat-968386175/" target="_blank" class="linkedin">
                            <v-icon size="30px" class="mr-3">mdi-linkedin</v-icon>
                        </v-btn>
                    </v-list-item>
                    <v-list-item>
                    
                    <v-btn href="mailto:yannis.amirat@edu.esiee.fr" class="email">
                        <v-icon size="30px" class="mr-3">mdi-email</v-icon>
                    </v-btn>
                    
                    
                    </v-list-item>
                    <v-list-item>
                          <v-btn href="https://wa.me/33611037975" class="whatsapp">
                            <v-icon size="30px" class="mr-3">mdi-whatsapp</v-icon>
                          </v-btn>
                        
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col cols="12" md="10">
                    <v-card class="pa-5 mt-15 ml-10 mb-10 contact-form" elevation="3">
                        <p class="text-center text-h5 font-weight-bold - mb-6 ma-2">Do you have a project to discuss? </p>
                        <v-form class="form-container">
                                <v-text-field label="Name" class="custom-field"/>
                                <v-text-field label="E-mail" class="custom-field"/>
                                <v-textarea label="Message" class="custom-field"/>
                                <v-row class="d-flex justify-center">
                                    <v-btn class=" text-uppercase ma-2 text-white px-2-" color="#2b394c-" outlined>Send</v-btn>

                                </v-row>
                        </v-form>    
                    </v-card>
                    
          
            </v-col>
        </v-row>
    </v-container>
    
</template>-

<style>
.contact{
    background:#0f172d ;
    color: white;
}



.form-container{
     max-width: 400px; /* Set max width */
  margin: 0 auto; /* Center the form */
  text-align: center;
}

.custom-field{
    width: 100%;
}



.v-btn {

    background-color: #2b394c;

}

.contact-icon{
    background: #2b394c;
}

.contact-form{
    background-color: #060e2e;
    color:white
}

.v-icon{
    width: 100px;
}

.linkedin{
    color:#2D79C7
}

.email{
    color:white
}

.whatsapp{
    color: rgb(9, 191, 9)
}

</style>