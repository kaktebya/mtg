<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getCardById } from '@/components/ScryfallApi';

const route = useRoute();
const card = ref();
const getCard = async () => {
	card.value = await getCardById(route.params.cardId)
}
onMounted(async () => {
	getCard()
})
</script>
<template>
<h1>Single Card</h1>
<pre>{{ card }}</pre>
</template>
