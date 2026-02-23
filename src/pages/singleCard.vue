<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getCardById } from '@/components/ScryfallApi';
import { getSymbols } from '@/AppState';

const route = useRoute();
const card = ref();
const cardMana = ref([]);
const symbols = ref();

const getCard = async () => {
	card.value = await getCardById(route.params.cardId)
}
onMounted(async () => {
	await getCard();
	symbols.value = await getSymbols();
	oneLineParseCardMana();
});

const parseCardMana = () => {
	const cardMana = card.value.mana_cost;
	const manaArray = Array.from(cardMana);
	const symbolArray = [];
	let symbol = '';
	for (let i = 0; i < manaArray.length; i++) {
		console.log(manaArray[i])
		if(manaArray[i] == '{') {
			symbol += manaArray[i];
		}
		if (manaArray[i] !== '{' && manaArray[i] !== '}') {
			symbol += manaArray[i];
		}
		if (manaArray[i] == '}') {
			symbol += manaArray[i];
			symbolArray.push(symbol);
			symbol = '';
		}
	}
	console.log(symbolArray)
	return symbolArray;
}

const fasterParseCardMana = () => {
	const cardMana = card.value.mana_cost;
	const manaArray = Array.from(cardMana);
	const symbolArray = [];
	let symbol = '';
	for (let i = 0; i < manaArray.length; i++) {
		symbol += manaArray[i];
		if (manaArray[i] == '}') {
			symbolArray.push(symbol);
			symbol = ''
		}
	}
	return symbolArray;
}

const oneLineParseCardMana = () => {
	const symbolArray = card.value.mana_cost.split('}').filter(Boolean).map(s => s + "}");
	for (let i = 0; i < symbolArray.length; i++) {
		for (let j = 0; j < symbols.value.length; j++) {
			if (symbols.value[j].symbol === symbolArray[i]) {
				cardMana.value.push({
					uri: symbols.value[j].svg_uri,
					symbol: symbolArray[i]
				})
			}
		}
	}
}

</script>
<template>
<h1>Single Card</h1>
<div class="single-card-wrap" v-if="card">
	<div class="card-image"><img :src="card.image_uris.normal" /></div>
	<div class="card-data">
		<div class="mana-cost" v-for="(card, index) in cardMana" :key="index">
			<img class="mana-img" :src="card.uri" />
		</div>
		<div>Card Symbol: {{ card.mana_cost }}</div>
		<pre>{{ cardMana }}</pre>
		<br />
		<pre>{{ symbols }}</pre>
		<br />
		<pre>{{ card }}</pre>
	</div>
</div>
</template>

<style scoped>
.single-card-wrap {
	display: flex;
	gap: 32px;
	align-items: flex-start;
}
.card-image {
	position: sticky;
	top: 32px;
}
.card-data {
	overflow: auto;
	background: rgb(240, 240, 240);
}
.mana-cost {
	display: flex;

}
.mana-img {
	width: 10px;
}
</style>
