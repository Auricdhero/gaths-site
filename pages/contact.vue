<template>
    <div>
        <v-container>
            <v-form style="width: 50rem;" class="mt-10 mb-10 mx-auto">
                <h2 class="text-center mb-10">Get In Touch</h2>
                <v-label>Full Name</v-label><br>
                <v-text-field variant="outlined" placeholder="Nathan Fletcher"></v-text-field><br>
                <v-label>Email</v-label><br>
                <v-text-field placeholder="nathanFletcher@gmail.com" variant="outlined"></v-text-field><br>
                <v-label>Message</v-label><br>
                <v-textarea variant="outlined" placeholder="Message"></v-textarea><br>
                <v-btn type="submit" width="900" variant="outlined">Send <v-icon>mdi-arrow-right</v-icon></v-btn>
            </v-form>
        </v-container>
    </div>
</template>