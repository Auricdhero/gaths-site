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
            <v-row>
                <v-col v-for="executive in executives.data" :key="executive.id">
                    <div class="d-flex">
                        <v-expansion-panels elevation="0">
                            <v-expansion-panel :title="executive.attributes.local_chapter.data.attributes.ChaterName">
                                <v-expansion-panel-text>
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
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
import blogPic from '/img/blog-bg.jpg';
const { data: executives } = await useFetch('https://admin.gathstudents.com/api/chapter-executives?populate=*');
</script>
<style>
.blog-title {
    background: rgba(8, 8, 99, 0.472);
}
</style>