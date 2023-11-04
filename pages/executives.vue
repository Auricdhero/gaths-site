<template>
    <div>
        <v-parallax :src="blogPic" height="320">
            <div class="blog-title">
                <v-container>
                    <h2 class="text-uppercase text-white text-center pt-16 mt-16 mb-16 pb-16">meet our executives</h2>
                </v-container>
            </div>
        </v-parallax>
        <v-container>

            <div class="d-flex">
                <div v-for="chapter in chapters.data" :key="chapter.id">
                    <v-expansion-panels elevation="0">
                        <v-expansion-panel :title="chapter.attributes.ChaterName">
                            <v-expansion-panel-text v-for="executive in executives.data" :key="executive.id">
                                <!-- <v-container style="width: 11em;"> -->
                                <v-card color="#103778" height="150" width="150">
                                    <!-- <v-img
                                    v-if="'https://admin.gathstudents.com' + rep.attributes.ExecutivePic.data.attributes.url == true"
                                    height="200" cover src="/img/profile.png"></v-img> -->
                                    <v-img height="200" round
                                        :src="'https://admin.gathstudents.com' + executive.attributes.Picture.data.attributes.url"
                                        cover style="border-radius: 50%;"></v-img>

                                </v-card><br>
                                <h5 class="text-start">{{ executive.attributes.Name }}</h5><br>
                                <h6 class="text-start">{{ executive.attributes.Title }}</h6>

                                <!-- </v-container> -->
                            </v-expansion-panel-text>

                        </v-expansion-panel>

                        <v-spacer></v-spacer>
                        <!-- <h3>{{ executive.attributes.Name }}</h3> -->
                    </v-expansion-panels>
                </div>

            </div>

        </v-container>
    </div>
</template>
<script setup>
import blogPic from '/img/blog-bg.jpg';
const { data: executives } = await useFetch('https://admin.gathstudents.com/api/chapter-executives?populate=*');
const { data: chapters } = await useFetch('https://admin.gathstudents.com/api/chapter-executives?populate=*');
// const chapter = chapters.data.value;
</script>
<style>
.blog-title {
    background: rgba(8, 8, 99, 0.472);
}
</style>