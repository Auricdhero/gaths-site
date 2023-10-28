<template>
    <div>
        <v-parallax :src="aboutImgBg" height="320">
            <div class="aboutImg">
                <v-container>
                    <h2 class="text-uppercase text-white text-center pt-16 mt-16 mb-16 pb-16">
                        {{ about.data.attributes.AboutCover }}
                    </h2>
                </v-container>
            </div>
        </v-parallax>
        <div class="about">
            <v-container>
                <v-row>
                    <v-col cols="auto" lg="5" md="6" sm="12">
                        <v-container class="mt-10 mb-10 ">
                            <h4 class="text-justify">{{ about.data.attributes.missionTitle }}</h4>
                            <p class="text-justify">{{ about.data.attributes.missionDetail }}</p>
                            <p class="text-muted text-italize">{{ about.data.attributes.missionQuote }}</p>
                            <v-row>
                                <v-col cols="auto" lg="2" sm="6">
                                    <v-avartar>
                                        <v-img
                                            :src="'http://127.0.0.1:1337' + about.data.attributes.visionPic.data.attributes.url"
                                            height="55"></v-img>
                                    </v-avartar>
                                </v-col>
                                <v-col cols="auto" lg="5" sm="6">
                                    <h6 class="text-left">{{ profileName }}</h6>
                                    <p class="text-left">{{ position }}</p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                    <v-col cols="auto" lg="6" md="6" sm="12">
                        <v-img class="mt-10 mb-10" height="350" :src="aboutImg"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-divider></v-divider>
        <div class="values">
            <h3 class=" mt-10 text-center">Core Values</h3><br>
            <v-container class="mt-10 d-flex justify-space-evenly">
                <br>
                <v-row dense>
                    <v-col v-for="value in values" :key="value" cols="auto" sm="">
                        <v-container>
                            <v-card class="ma-2 pa-2" style="width: 20em;">
                                <v-container fluid>
                                    <v-icon class="d-flex justtify-center mt-5 mx-auto" style="font-size: 60px;">{{
                                        value.icon
                                    }}</v-icon>
                                    <v-card-item>
                                        <h4 class="text-center">{{ value.title }}</h4><br>
                                        <p class="text-justify">{{ value.description }}</p>

                                    </v-card-item>
                                </v-container>
                            </v-card>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="mission-statement">
            <v-container>
                <v-row>
                    <v-col cols="auto" lg="">
                        <v-img :src="'http://127.0.0.1:1337' + about.data.attributes.visionPic.data.attributes.url"
                            class="mt-10 mb-10" height="350"></v-img>
                    </v-col>
                    <v-col cols="auto" lg="">
                        <v-container class="mt-10 pt-10">
                            <h4 class="text-left">{{ about.data.attributes.visionTitle }}</h4>
                            <p class="text-left">{{ about.data.attributes.visionDescription }}</p>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </div>

    </div>
</template>
<script setup>
import aboutImgBg from '/img/about.png'
import aboutImg from '/img/customerService.webp';
import profile from '/img/bismark.png';

const config = useRuntimeConfig();
const aboutContent = await useFetch('http:///127.0.0.1:1337/api/about-page?populate=*');
const about = aboutContent.data.value;
// console.log(config.public.apiBase);
// const visionImg = computed(() => {
//     // if (!about.value.data) {
//     //     return null
//     // }
//     return 'http:///127.0.0.1:1337/api/about-page?populate=*about.data.attributes.missionPic.data.attributes.url'
// })
console.log(about);

const profileName = 'Bismark Osei';
const position = 'Executive Member';

const values = ref([
    { icon: 'mdi-school', title: 'Excellence', description: 'The quick brown fox jumped over the lazy dog.' },
    { icon: 'mdi-account-hard-hat', title: 'Hard Work', description: 'The quick brown fox jumped over the lazy dog.' },
    { icon: 'mdi-campfire', title: 'Hospitality', description: 'The quick brown fox jumped over the lazy dog.' }
]);



</script>
<style>
.aboutImg {
    background: rgba(8, 8, 99, 0.472);
}

.mission-statement {
    background: rgba(0, 0, 0, .1);
}</style>