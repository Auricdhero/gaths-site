<template>
    <div class="home">
        <v-parallax :src="imgbg" height="700">
            <div class="homeImg">
                <div class="mx-auto ">
                    <v-container class="justify-content-center" style="width: 50%;">
                        <h1 class="mx-auto mt-16 pt-10 text-uppercase text-white text-center">
                            <!-- {{ home.attributes.pageTitle }} -->
                            <!-- {{home.data.attributes.coverPa}} -->
                            {{ home.data.attributes.coverPa }}
                        </h1><br>
                        <p class="mx-auto d-flex text-sentence text-center text-white">
                            {{ home.data.attributes.coverDescription }}
                        </p>
                        <v-row>
                            <v-col class="mx-auto" cols="auto" lg="3" md="6" sm="6">
                                <v-btn variant="flat" color="red-accent-2">Learn More
                                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                            </v-col>
                            <v-col class="mx-auto" cols="auto" lg="5" md="12" sm="6">
                                <v-btn variant="outlined" color="white">Become a Member
                                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </div>
        </v-parallax>
        <br>
        <v-container>
            <v-row>
                <v-col cols="auto" lg="6" sm="6">
                    <v-container class="mt-15">
                        <h3 class="text-sentence">{{ home.data.attributes.InstitutionDescriptionTitle }}</h3><br>
                        <p class="justify-content-start">{{ home.data.attributes.InstitutionDescription }}
                        </p>
                        <v-row>
                            <v-col cols="auto" lg="4" sm="6">
                                <v-btn color="red-accent-2">Learn More
                                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                            </v-col>
                            <v-col cols="auto" lg="5" sm="6">
                                <v-btn variant="outlined" color="indigo-darken-2" flat>Find a Chapter
                                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
                <v-col cols="auto" lg="6" sm="6">
                    <v-container>
                        <h3 class="text-sentence">We collaborate with 10+ universities and partner institutions.</h3>
                        <v-row>
                            <v-col v-for="image in images" :key="image" cols="4">
                                <v-img height="4em" aspect-ratio="1" :src="image.src"></v-img>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
        <div style="background-color: #CEE1EA;">
            <v-container>
                <v-row>
                    <v-col cols="" sm="">
                        <v-img height="34em"
                            :src="'https://admin.gathstudents.com' + home.data.attributes.skillgapPic.data.attributes.url"></v-img>
                    </v-col>
                    <v-col cols="" sm="">
                        <v-container class="pt-16 mt-16">
                            <h4>{{ home.data.attributes.skillgapTitle }}</h4><br>
                            <p>{{ home.data.attributes.skillGapDescription }} <nuxt-link to="">{{ link }}</nuxt-link></p>
                            <br>
                            <v-btn color="#103778" variant="outlined">View Report
                                <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div style="background:#F8F7F7;">
            <v-container class="mx-auto">
                <h3 class="text-center text-uppercase mt-10">{{ exeMem }}</h3><br>
                <p class="text-center">{{ memDes }}</p><br>
                <v-slide-group height="600">
                    <v-slide-group-item v-for="testimony in testimonies.data" :key="testimony.id">
                        <!-- {{ testimony }} -->
                        <v-card width="400" color="#F8F7F7" elevation="0">
                            <v-img v-if="'https://admin.gathstudents.com' + testimony.attributes.ProfilePic.data == true" class="mt-4"
                                src="/img/profile.png"
                                height="200"></v-img>

                            <v-img v-else class="mt-4"
                                :src="'https://admin.gathstudents.com' + testimony.attributes.ProfilePic.url"
                                height="200"></v-img><br>

                            <h5 class="text-center">{{ testimony.attributes.Name }}</h5><br>
                            <h6 class="text-center">{{ testimony.attributes.institution }}</h6><br>
                            <div>
                                <v-divider inset width="255" color="#E3371E"></v-divider><br>
                            </div>
                            <p class="text-justify"><v-container>{{ testimony.attributes.quote }}</v-container></p>
                        </v-card>

                    </v-slide-group-item>
                </v-slide-group>
            </v-container>
        </div>
        <div>
            <v-container>
                <h6 class="text-left mt-16" style="color: #103778;">2023-2024</h6><br>
                <h3 class="text-left text-uppercase" style="color: #103778;">your elected representatives</h3><br>
                <v-row class="mb-10 d-flex">
                    <v-col cols="auto" lg="2" md="5" sm="1" v-for="rep in reps.data" :key="rep.id">
                        <v-container style="width: 12em;">
                            <v-card color="#103778" height="150" width="150">
                                <v-img v-if="'https://admin.gathstudents.com' + rep.attributes.ExecutivePic.data.attributes.url == true" height="200" cover src="/img/profile.png"></v-img>
                                <v-img v-else height="200" round :src="'https://admin.gathstudents.com' +  rep.attributes.ExecutivePic.data.attributes.url" cover style="border-radius: 50%;"></v-img>
                            </v-card><br>
                            <h5 class="text-center">{{ rep.attributes.Name }}</h5><br>
                            <h6 class="text-center">{{ rep.attributes.Position }}</h6>
                        </v-container>
                        <br>
                    </v-col>

                </v-row>
                <v-btn class="mx-auto d-flex" variant="flat" color="red-accent-2">See all reps
                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                <br>
            </v-container><br>
        </div>
        <div style="background: #DAEDF6;">
            <v-container>
                <v-row class="mt-16 mb-16">
                    <v-col cols="auto" lg="6" sm="4">
                        <v-img height="350"
                            :src="'https://admin.gathstudents.com' + home.data.attributes.tourismFutureDes.data.attributes.url"></v-img>
                    </v-col>
                    <v-col cols="auto" lg="6" sm="8">
                        <v-container class="mt-10">
                            <h4 class="text-left">
                                {{ home.data.attributes.tourismFutureTitle }}
                            </h4><br>
                            <p class="text-justify">
                                {{ home.data.attributes.tourismFutureDescription }}
                            </p><br>
                            <v-btn color="#103778" variant="outlined">View Report
                                <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>
<script setup>
import imgbg from '../assets/img/img-bg.jpg'

const homeContent = await useFetch('https://admin.gathstudents.com/api/home-page?populate=*');
const home = homeContent.data.value;
console.log(homeContent)

const images = ref([
    { src: '/img/att.png' },
    { src: '/img/blue.png' },
    { src: '/img/htu.png' },
    { src: '/img/ktu.png' },
    { src: '/img/att.png' },
    { src: '/img/nimdea.png' },
    { src: '/img/tech.png' },
    { src: '/img/UCC.png' },
    { src: '/img/ue.png' },
    { src: '/img/temtu.png' },
]);

// const liveTitle = 'Tourism and Hospitality Skills Gap Report';
// const liveContent = 'It is a long established fact that 89%  readers will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. ';
const link = 'Tourism Impact Report (2022).';

const exeMem = 'From the University Tourism Community';
const memDes = '5+ thousand tourism students have already joined the  university tourism community.';


const {data:reps} = await useFetch('https://admin.gathstudents.com/api/executives?populate=*')
const { data: testimonies } = await useFetch('https://admin.gathstudents.com/api/testimonies?populate=*');



</script>
<style>
.homeImg {
    background: rgba(8, 8, 99, 0.472);
    height: 100%;
}

body {
    background: #F2F1F1;
}
</style>