<template>
    <div>
        <v-container>
            <v-row>
                <v-col v-for="event in events.data" :key="event.id">
                    <v-card width="300">

                        <v-img cover :src="'https://admin.gathstudents.com' + event.attributes.flyer.data.attributes.url"
                            height="150"></v-img><br>
                        <v-container>

                            <v-card-title>
                                {{ event.attributes.Title }}
                            </v-card-title><br>
                            <p class="text-muted">{{ event.attributes.Date }}</p>
                            <p class="text-muted mt-1"><v-icon>mdi-map-marker</v-icon>{{ event.attributes.Location
                            }}</p>
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