<template>
    <div>
        <v-parallax :src="blogPic" height="320">
            <div class="blog-title">
                <v-container>
                    <h2 class="text-uppercase text-white text-center pt-16 mt-16 mb-16 pb-16">{{blog.data.attributes.Title}}</h2>
                </v-container>
            </div>
        </v-parallax>
        

    </div>
</template>
<script setup>
import blogPic from '/img/blog-bg.jpg';
const route = useRoute();
const { data: blogs } = await useFetch('http://localhost:1337/api/blogs?populate=*');
const { data: blog } = await useFetch('http://localhost:1337/api/blogs/${route.params.id}');
</script>