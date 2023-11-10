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
                                    <li>Membership Benefits</li>
                                    <li>Registration</li>
                                    <li>Open a Chapter</li>
                                    <li>Become a Member</li>
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="3" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(254, 9, 9);">Advocacy</h5>
                                <ul class="text-left ml-n8">
                                    <li>Policy Agenda</li>
                                    <li>Get Involved</li>
                                    <li>Legacy Advocacy</li>
                                    <li>Commitment to SDG's</li>
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="3" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(254, 9, 9);">Events</h5>
                                <ul class="text-left ml-n8">
                                    <li>Event Calandar</li>
                                    <li>Out Reaches</li>
                                    <li>Open a Chapter</li>
                                    <li>Become a Member</li>
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="3" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(254, 9, 9);">Organization</h5>
                                <ul class="text-left ml-n8">
                                    <li>Event Calandar</li>
                                    <li>Out Reaches</li>
                                    <li>Open a Chapter</li>
                                    <li>Become a Member</li>
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="5" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(254, 9, 9);">Resources</h5>
                                <ul class="text-left ml-n8">
                                    <li>Resource Library</li>
                                    <li>Marketplace</li>
                                    <li>Learning Center</li>
                                    <!-- <li>Become a Member</li> -->
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="3" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(254, 9, 9);">Legal</h5>
                                <ul class="text-left ml-n8">
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                    <li>Cookie Policy</li>
                                    <li>Website Accessibility Statement</li>
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
                        <!-- <v-form class="mt-7">

                            <v-row no-gutters>
                                <v-col cols="auto" lg="8" md="8" sm="8">
                                    <v-text-field variant="outlined"
                                        placeholder="Enter your email address to subscribe"></v-text-field>
                                </v-col>
                                <v-col cols="auto" lg="3" md="3" sm="3">
                                    <v-btn style="height: 55px;">Subscribe</v-btn>
                                </v-col>
                            </v-row>

                        </v-form> -->
                    </v-col>
                </v-row>

                <v-divider></v-divider>

                <div>
                    <v-btn v-for="sm in sms" :key="sm" class="mx-4" :icon="sm.icons" :href="sms.src" variant="text"></v-btn>
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
</style>