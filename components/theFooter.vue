<template>
    <div>

        <v-footer class="bg-indigo-darken-4 text-center d-flex flex-column">


            <img :src="logoIcon" alt=""><br>
            <div class="pt-0 ma-10">
                Join the Ghana Association of Tourism and Hospitality Students today and unlock exclusive opportunities to
                learn from industry experts, network with. network with professionals, and make a t industry.
            </div>
            <v-form style="width: 40em;">
                <v-container>
                    <v-row no-gutters>
                        <v-col cols="8">
                            <v-text-field variant="outlined"
                                placeholder="Enter your email address to subscribe"></v-text-field>
                        </v-col>
                        <v-col cols="2">
                            <v-btn style="height: 55px;">Subscribe</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>

            <v-divider></v-divider>

            <div>
                <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
            </div>
        </v-footer>
    </div>
</template>
<script setup>
import logoIcon from '../assets/img/logo.webp'
const icons = ref(['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram',]);
</script>
<style>
ul {
    list-style-type: none;
}
</style>