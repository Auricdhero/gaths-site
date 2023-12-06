<template>
    <div>
        <v-parallax :src="aboutImgBg" height="320">
            <div class="aboutImg">
                <v-container>
                    <h2 class="text-uppercase text-white text-center pt-16 mt-16 mb-16 pb-16">
                        Events
                    </h2>
                </v-container>
            </div>
        </v-parallax>
        <v-container>
            <v-row>
                <template v-for="event in events.data" :key="event.id">
                    <v-col>
                        <v-card width="300">
                            <nuxt-link style="text-decoration: none;" :to="'/events/' + event.id">


                                <v-img cover
                                    :src="'https://admin.gathstudents.com' + event.attributes.flyer.data.attributes.url"
                                    height="150"></v-img><br>
                                <v-container>

                                    <v-card-title>
                                        {{ event.attributes.Title }}
                                    </v-card-title><br>
                                    <p class="text-muted"><v-icon>mdi-calendar-range</v-icon> {{ event.attributes.Date }}
                                    </p>
                                    <p class="text-muted mt-1"><v-icon>mdi-map-marker</v-icon> {{ event.attributes.Location
                                    }}</p>
                                    <div>
                                        <div v-if="event.attributes.url === true">
                                            <v-icon>mdi-laptop-account</v-icon><nuxt-link
                                                :to="event.attributes.url"></nuxt-link>
                                        </div>
                                        <div v-else>
                                            <p class="text-muted"><v-icon>mdi-web-off</v-icon> Offline</p>
                                        </div>
                                    </div>
                                </v-container>
                            </nuxt-link>
                        </v-card>
                        <br>
                    </v-col>
                </template>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
import aboutImgBg from '/img/about.png';
const { data: events } = await useFetch('https://admin.gathstudents.com/api/events?populate=*');
// const route = useRoute();
// watch(route, value => {
//     refresh()
// });
</script>
<style>
.aboutImg {
    background: rgba(8, 8, 99, 0.472);
}
</style>