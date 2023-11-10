<template>
    <div>
        <v-container>
            <v-form @submit.prevent="sendMessage" class="mt-10 mb-10 w-50 mx-auto">
                <h2 class="text-center mb-10">Get In Touch</h2>
                <v-label>Full Name</v-label><br>
                <v-text-field v-model="fullName" variant="outlined" placeholder="Nathan Fletcher"></v-text-field><br>
                <v-label>Email</v-label><br>
                <v-text-field placeholder="nathanFletcher@gmail.com" v-model="email" variant="outlined"></v-text-field><br>
                <v-label>Message</v-label><br>
                <v-textarea variant="outlined" placeholder="Message" v-model="message"></v-textarea><br>
                <v-btn type="submit" width="900" variant="outlined">{{ isLoading ? 'Loading...' : 'Send' }} <v-icon>mdi-arrow-right</v-icon></v-btn>
            </v-form>
            <v-divider></v-divider>
            
        </v-container>

    </div>
</template>
<script setup>
// import 
const fullName = ref('');
const email = ref('');
const message = ref('');
const isLoading = ref(false)

const sendMessage = async () => { 
    try {
        
    } catch (error) {
        
    }
};

</script>