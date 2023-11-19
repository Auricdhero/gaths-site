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
                    <v-col cols="" lg="5" md="6" sm="12">
                        <v-container class="mt-10 mb-10">
                            <h4 class="text-justify">{{ about.data.attributes.missionTitle }}</h4>
                            <p class="text-justify">{{ about.data.attributes.missionDetail }}</p>
                            <p class="text-muted text-italize">{{ about.data.attributes.missionQuote }}</p>
                        </v-container>
                    </v-col>
                    <v-col cols="" lg="" md="" sm="">
                        <v-img class="mt-10 mb-10" aspect-ratio="1" height="350"
                            :src="'https://admin.gathstudents.com' + about.data.attributes.missionPic.data.attributes.url"></v-img>
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
        <!-- <v-divider></v-divider> -->
        <div>
            <v-container>
                <h2 class="text-center text-uppercase">{{ history.data.attributes.Title }}</h2>
                <p class="text-justify">{{ history.data.attributes.Summary }}</p>
                <v-btn class="mx-auto d-flex" to="/history" style="width: 15em;" variant="flat" color="red-accent-2">Read
                    More
                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
            </v-container>
        </div>
        <div class="mission-statement">
            <v-container>
                <v-row>
                    <v-col cols="" sm="" lg="">
                        <v-img :src="'https://admin.gathstudents.com' + about.data.attributes.visionPic.data.attributes.url"
                            class="mt-10 mb-10" aspect-ratio="1" height="350"></v-img>
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
// import profile from '/img/bismark.png';

// const config = useRuntimeConfig();
const aboutContent = await useFetch('https://admin.gathstudents.com/api/about-page?populate=*');
const about = aboutContent.data.value;

const histories = await useFetch('https://admin.gathstudents.com/api/history-of-gath?populate=*')
const history = histories.data.value;

console.log(about);

// const profileName = 'Bismark Osei';
// const position = 'Executive Member';

const values = ref([
    { icon: 'mdi-school', title: 'Unity', description: 'Evident in the mission to "unite students of Tourism, Hospitality, and related programs," GATHS emphasizes the strength that comes from a unified community, fostering collaboration and shared goals among students passionate about the industry.' },
    { icon: 'mdi-account-hard-hat', title: 'Excellence', description: "Derived from the commitment to drive the growth of Ghana's tourism and hospitality sector," + "GATHS places a high value on excellence, both in education and in contributing to the sustainable economic growth of the sector, showcasing a dedication to achieving and maintaining high standards." },
    { icon: 'mdi-campfire', title: 'Sustainability', description: "Rooted in the vision to" + '"promote sustainable tourism and hospitality practices," GATHS demonstrates a commitment to responsible and eco-friendly approaches, recognizing the importance of preserving the environment and contributing positively to local communities and the global tourism landscape.' },
    { icon: 'mdi-head-light-bulb', title: 'Innovation', description: 'Inherent in the aim to "bridge the academia-industry gap," GATHS values innovation, showcasing an openness to new ideas and approaches. The association embraces a dynamic, forward-thinking mindset to enhance the learning and professional experiences of its members.' }
]);



</script>
<style>
.aboutImg {
    background: rgba(8, 8, 99, 0.472);
}

.mission-statement {
    background: rgba(0, 0, 0, .1);
}
</style>