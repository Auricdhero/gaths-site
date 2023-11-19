<template>
    <div>

        <v-footer class="bg-indigo-darken-4 text-center">


            <v-container>
                <v-row>
                    <v-col cols="auto" lg="7" sm="12" class="mt-5">
                        <v-row>
                            <v-col cols="auto" lg="3" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(254, 9, 9);">Membership</h5>
                                <ul class="text-left ml-n8">
                                    <li><nuxt-link to=""> Membership Benefits</nuxt-link></li>
                                    <!-- <li><nuxt-link to="">Registration</nuxt-link> </li> -->
                                    <li><nuxt-link to="">Partner With Us</nuxt-link> </li>
                                    <li><nuxt-link to="">Become a Member</nuxt-link> </li>
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="3" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(254, 9, 9);">Advocacy</h5>
                                <ul class="text-left ml-n8">
                                    <li><nuxt-link class="link" to="/blogs/">Policy Agenda</nuxt-link> </li>
                                    <li><nuxt-link to="">Get Involved</nuxt-link> </li>
                                    <!-- <li><nuxt-link to="">Legacy Advocacy</nuxt-link> </li> -->
                                    <li><nuxt-link class="link" to="/about">Commitment to SDG's</nuxt-link> </li>
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="3" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(254, 9, 9);">Events</h5>
                                <ul class="text-left ml-n8">
                                    <li><nuxt-link class="link" to="/events/"></nuxt-link> Event Calandar</li>
                                    <li><nuxt-link to="">Out Reaches</nuxt-link> </li>
                                    <li><nuxt-link to="">Partner With Us</nuxt-link> </li>
                                    <li><nuxt-link to="">Become a Member</nuxt-link> </li>
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="3" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(254, 9, 9);">Organization</h5>
                                <ul class="text-left ml-n8">
                                    <li><nuxt-link class="link" to="/events/">Event Calandar</nuxt-link> </li>
                                    <!-- <li><nuxt-link to="">Out Reaches</nuxt-link> </li> -->
                                    <li><nuxt-link to="">Partner With Us</nuxt-link> </li>
                                    <li><nuxt-link class="link" to="/gallery">Gallery</nuxt-link> </li>
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="5" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(254, 9, 9);">Resources</h5>
                                <ul class="text-left ml-n8">
                                    <li><nuxt-link to="">Resource Library</nuxt-link> </li>
                                    <li><nuxt-link to="">Marketplace</nuxt-link> </li>
                                    <li><nuxt-link to="">Learning Center</nuxt-link></li>
                                    <!-- <li>Become a Member</li> -->
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="3" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(254, 9, 9);">Legal</h5>
                                <ul class="text-left ml-n8">
                                    <li><nuxt-link to="">Terms & Conditions</nuxt-link></li>
                                    <li><nuxt-link to="">Privacy Policy</nuxt-link></li>
                                    <li><nuxt-link to="">Cookie Policy</nuxt-link></li>
                                    <li><nuxt-link to="">Website Accessibility Statement</nuxt-link></li>
                                </ul>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="auto" lg="5" sm="12">
                        <img :src="logoIcon" width="325" alt=""><br>
                        <div class="pt-0 text-justify">
                            Join the Ghana Association of Tourism and Hospitality Students today and unlock exclusive
                            opportunities to
                            learn from industry experts, network with. network with professionals, and make a t industry.
                        </div>
                        <v-form class="mt-7">
                            <v-text-field variant="outlined"
                                placeholder="Enter your email address to Subscribe to Our Newsletter"></v-text-field>
                            <v-btn style="height: 55px;">Subscribe To Our News Letters</v-btn>
                        </v-form>
                    </v-col>
                </v-row>

                <v-divider></v-divider>

                <div>
                    <v-btn v-for="sm in sms" :key="sm" :icon="sm.icons" :href="sms.src" class="mx-4"
                        variant="text"><v-icon>{{ sm.icons }}</v-icon></v-btn>
                </div>
            </v-container>  
        </v-footer>
    </div>
</template>
<script setup>
import logoIcon from '../assets/img/logo.webp'
const sms = ref([
    { icons: 'mdi-facebook', src: '' },
    { icons: 'mdi-twitter', src: 'https://twitter.com/GATHSofficial1?t=-MNnLOAY6ohVcCFWtirSQg&s=09' },
    { icons: 'mdi-linkedin', src: 'https://www.linkedin.com/company/ghana-association-of-tourism-and-hospitality-students-gaths/?originalSubdomain=gh' },
    { icons: 'mdi-instagram', src: 'https://instagram.com/gaths.official?igshid=OGQ5ZDc2ODk2ZA==' }
]);
</script>
<style>
ul {
    list-style-type: none;

}

.link {
    text-decoration: none;
    color: white;
}
</style>