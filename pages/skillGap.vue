<template>
    <div class="home">
        <v-parallax :src="'http://localhost:1337'+ skill.data.attributes.coverImg.data.attributes.url" height="300">
            <div class="plxcvr">
                <div class="pt-16"></div>
                <h1 class="text-center text-white pt-16">
                    {{skill.data.attributes.skillGapTitle}}
                </h1>
            </div>
        </v-parallax>
        <v-container>
           {{ skill.data.attributes.body }}
        </v-container>

    </div>
</template>
<script setup>
import imgbg from '../assets/img/img-bg.jpg'

const skillGap = await useFetch('http://localhost:1337/api/skillgap-report?populate=*');
const skill = skillGap.data.value;
// console.log(localChapters)
</script>
<style>
.plxcvr {
    background: rgba(8, 8, 99, 0.472);
    height: 100%;
}
</style>