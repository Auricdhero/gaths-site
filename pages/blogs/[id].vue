<template>
    <div>
        <v-parallax :src="blogPic" height="320">
            <div class="blog-title">
                <v-container>
                    <!-- <h2 class="text-uppercase text-white text-center pt-16 mt-16 mb-16 pb-16">{{ blog.data.attributes.Title }}
                    </h2> -->

                </v-container>

            </div>
        </v-parallax>
        <v-container>
            {{ blog }}
        </v-container>
        <!-- {{ route.blog.Title }} -->
        <!-- <h4>{{ route }}</h4> -->


    </div>
</template>
<script setup>
import blogPic from '/img/blog-bg.jpg';
const route = useRoute();

const { data: blogs } = await useFetch('https://admin.gathstudents.com/api/blogs?populate=*');
const blog = await useFetch('https://admin.gathstudents.com/api/blogs/');
// const blog = blogId.data.value;
const single = blog.data.value;
console.log(single)
</script>