<template>
    <div>
        <v-container>
            <v-row>
                <template v-for="gallery in galleries.data" :key="gallery.id">
                    <v-col >
                        <v-img cover height="100%"
                            :src="'https://admin.gathstudents.com' + gallery.attributes.Pics.data.attributes.url"></v-img>
                    </v-col>
                </template>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
const { data: galleries } = await useFetch('https://admin.gathstudents.com/api/galleries?populate=*');
</script>