<script setup>
import { searchResults, searchQuery, searchProgress } from "@/AppState"
import { useRouter } from "vue-router";

const router = useRouter();

const goToSingleCard = (id) => {
	router.push({path: `/single-card/${id}`})
}
</script>

<template>
	<div class="cards-grid" v-if="searchResults && searchResults.length > 0">
		<div class="card" v-for="(card, index) in searchResults" :key="index" @click="goToSingleCard(card.id)">
			<img class="card-image" :src="card?.image_uris?.normal" />
			<!-- <NoImageCard v-else :card="card" /> -->
		</div>
	</div>
	<div v-else-if="searchResults && searchResults.length === 0 && searchQuery" class="no-search no-cards">No cards found.</div>
	<div v-else-if="!searchQuery" class="no-search">Search the MTG database for your cards.</div>
	<div v-if="searchProgress" class="loading">
		<img class="dice" src="https://media.tenor.com/IjDbhgFyBAsAAAAj/20-sided-dice.gif" />
	</div>
</template>

<style scoped>
.cards-grid {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 10px;
}
.card {
	aspect-ratio: 10 / 14.2;
	cursor: pointer;
	will-change: transform;
	transition: transform .2s;
	transform-origin: center;
}
.card:hover {
	transform: scale(1.1);
	z-index: 1;
}
.card-image {
	width: 100%;
	height: auto;
}
.no-search {
	font-size: 36px;
	text-align: center;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}
.span {
	grid-column: span 2;
}
.no-cards {
	color: var(--theme-primary-color--300);
}
.loading {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
