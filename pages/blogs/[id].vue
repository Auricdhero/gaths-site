<template>
    <div>
        <v-parallax :src="'https://admin.gathstudents.com' + route.params.id" height="320">
            <div class="blog-title">
                <v-container>
                    <h2 class="text-uppercase text-white text-center pt-16 mt-16 mb-16 pb-16">{{ blog.data.attributes.Title
                    }}
                    </h2>

                </v-container>

            </div>
        </v-parallax>
        <v-container>
            <p>
                {{ blog.data.attributes.Detail }}
            </p>
        </v-container>
        <!-- {{ route.blog.Title }} -->
        <!-- <h4>{{ route }}</h4> -->


    </div>
</template>
<script setup>
import blogPic from '/img/blog-bg.jpg';
const route = useRoute();
// const blogId = route.params.id
const blogs = await useFetch('https://admin.gathstudents.com/api/blogs?populate=*');
const blogImg = blogs.data.value
const { data: blog } = await useFetch('https://admin.gathstudents.com/api/blogs/' + route.params.id);

</script>