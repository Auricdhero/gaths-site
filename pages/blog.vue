<template>
    <div>
        <v-parallax :src="blog" height="320">
            <div class="blog-title">
                <v-container>
                    <h2 class="text-uppercase text-white text-center pt-16 mt-16 mb-16 pb-16">our stories</h2>
                </v-container>
            </div>
        </v-parallax>
        <div class="blogs">
            <v-container>
                <v-row>
                    <v-col cols="auto" lg="4" sm="6" v-for="blog in blogs" :key="blog">
                        <NuxtLink :to="blog.to">
                            <v-card>
                                <v-img :src="blog.src" height="300" cover></v-img>
                                <v-card-item>
                                    <h4 class="text-center">{{ blog.title }}</h4>
                                    <v-divider></v-divider>
                                    <p class="text-justify">{{ blog.description }}</p>
                                </v-card-item>
                                <v-btn class="mx-4 mb-10" variant="outlined">Read More <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                            </v-card>
                        </NuxtLink>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>
<script setup>
import blog from '/img/blog-bg.jpg';


const blogs = ref([
    { title: 'The President funds GATHS $50000.00', to: '', src: '/img/another.png', description: 'The quick brown fox jumps over the lazy dog' },
    { title: 'GATHS partners with Kimpiskey for Human Resources', to: '', src: '/img/another.png', description: 'The quick brown fox jumps over the lazy dog' },
    { title: 'GATHS add Research and Developments team.', to: '', src: '/img/another.png', description: 'The quick brown fox jumps over the lazy dog' },
]);


</script>
<style>
.blog-title {
    background: rgba(8, 8, 99, 0.472);
}
</style>