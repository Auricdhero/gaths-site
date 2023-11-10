<template>
    <div>
        <v-container>
            <Markdown :source="history.data.attributes.body" />
        </v-container>
    </div>
</template>
<script setup>
import Markdown from 'vue3-markdown-it'
const histories = await useFetch('https://admin.gathstudents.com/api/history-of-gath?populate=*');
const history = histories.data.value;
</script>