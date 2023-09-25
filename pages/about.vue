<template>
    <div>
        <v-parallax :src="about" height="320">
            <div class="aboutImg">
                <v-container>
                    <h2 class="text-uppercase text-white text-center pt-16 mt-16 mb-16 pb-16">about gaths</h2>
                </v-container>
            </div>
        </v-parallax>
        <div class="about">
            <v-row>
                <v-col>
                    <v-container class="mt-10 mb-10 mx-10">
                        <h4 class="text-justify">{{ missionTitle }}</h4>
                        <p class="text-justify">{{ missionContent }}</p>
                        <p class="text-muted text-italize">{{ quote }}</p>
                        <v-row>
                            <v-col cols="auto" lg="2">
                                <v-avartar>
                                    <v-img :src="profile" height="55"></v-img>
                                </v-avartar>
                            </v-col>
                            <v-col cols="auto" lg="5">
                                <h6 class="text-left">{{ profileName }}</h6>
                                <p class="text-left">{{ position }}</p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
                <v-col>
                    <v-img class="mt-10 mb-10" height="350" :src="aboutImg"></v-img>
                </v-col>
            </v-row>
        </div>
        <div class="mission-statement">
            <v-row>
                <v-col>
                    <v-img :src="aboutImg" class="mt-10 mb-10" height="350"></v-img>
                </v-col>
                <v-col>
                    <v-container class="mt-10 pt-10">
                        <h4 class="text-left">{{ missionTitle }}</h4>
                        <p class="text-left">{{ missionContent }}</p>
                    </v-container>
                </v-col>
            </v-row>
        </div>
        <div class="values">
            <v-container class="mt-10">
                <h3 class="text-center">Core Values</h3><br>
                <v-row>
                    <v-col>
                        
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>
<script setup>
import about from '/img/about.png'
import aboutImg from '/img/customerService.webp';
import profile from '/img/bismark.png';

const missionTitle = 'Our Mission: Advancing Tourism Education and Industry Excellence';
const missionContent = 'At GATHS, we are on a mission to advance education and foster industry excellence in tourism and hospitality. Through innovative educational opportunities, a culture of continuous learning, and collaboration among industry stakeholders, we empower students and professionals to excel in their careers. Our focus on knowledge, skill development, and practical application prepares individuals to become future leaders and changemakers who drive innovation and create positive impacts within the dynamic world of tourism and hospitality.""';
const quote = '“Its a privilege to work alongside passionate individuals who share the same vision and determination.I am proud of our achievements and excited for the journey ahead as we continue to make a lasting impact on the tourism and hospitality landscape.”';
const profileName = 'Bismark Osei';
const position = 'Executive Member';





</script>
<style>
.aboutImg {
    background: rgba(8, 8, 99, 0.472);
}

.mission-statement {
    background: rgba(0, 0, 0, .1);
}
</style>