<template>
    <div>
        <v-container>
            <v-row>
                <v-col v-for="event in events.data.reverse()" :key="event.id">
                    <v-card width="300">

                        <v-img cover :src="'https://admin.gathstudents.com' + event.attributes.flyer.data.attributes.url"
                            height="150"></v-img><br>
                        <v-container>

                            <v-card-title>
                                {{ event.attributes.Title }}
                            </v-card-title><br>
                            <p class="text-muted"><v-icon>mdi-calendar-range</v-icon> {{ event.attributes.Date }}</p>
                            <p class="text-muted mt-1"><v-icon>mdi-map-marker</v-icon> {{ event.attributes.Location
                            }}</p>
                            <div>
                                <div v-if="event.attributes.url === true">
                                    <v-icon>mdi-laptop-account</v-icon><nuxt-link :to="event.attributes.url"></nuxt-link>
                                </div>
                                <div v-else><p class="text-muted"><v-icon>mdi-web-off</v-icon> Offline</p></div>
                            </div>
                        </v-container>

                    </v-card><br>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
const { data: events } = await useFetch('https://admin.gathstudents.com/api/events?populate=*');
</script>