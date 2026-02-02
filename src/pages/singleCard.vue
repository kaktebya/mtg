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
<div class="container-fluid" v-if="card">
	<div class="row justify-content-center text-center">
		<div class="col-12">
			<img :src="card.image_uris.normal" class="" alt="">
		</div>
		<div class="col-7">
			<h3> Name: {{ card.name }}</h3>
		</div>
		<div class="col-7">
			<h3> Released: {{ card.released_at }}</h3>
		</div>
		<div class="col-7">
			<h3> Mana Cost: {{ card.mana_cost }}</h3>
		</div>
		<div class="col-7">
			<h3> CMC: {{ card.cmc }}</h3>
		</div>
		<div class="col-7">
			<h3> Card Type: {{ card.type_line }}</h3>
		</div>
		<div class="col-7">
			<h3> Card Text: {{ card.oracle_text }}</h3>
		</div>
		<div class="col-7">
			<h3> Flavor Text: {{ card.flavor_text }}</h3>
		</div>
		<div class="col-7">
			<h3> Price: {{ card.prices.usd }}</h3>
		</div>
		<div class="col-7">
			<h3> Foil Price: {{ card.prices.usd_foil }}</h3>
		</div>
	</div>
	<div>

	</div>
	<pre>{{ card }}</pre>
</div>
</template>
<style>
/* .single-card{
	display: flex;
	justify-content: center;
} */
</style>
