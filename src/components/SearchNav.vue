<script setup>
import { ref } from "vue";
import SearchBanner from "./SearchBanner.vue";
import { searchResults, searchQuery, searchProgress } from "@/AppState";

const input = ref();
const getCards = async () => {
	if (!input.value) return;
	// call the mtg api to get cards
	searchProgress.value = true;
	searchResults.value = null;
	searchQuery.value = input.value;
	searchResults.value = await fetchCardsByName(input.value);
	input.value = "";
	searchProgress.value = false;
};

async function fetchCardsByName(name) {
	const encodedName = encodeURIComponent(name);
	const url = `https://api.magicthegathering.io/v1/cards?name=${encodedName}`;

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`MTG API error: ${response.status}`);
	}

	const data = await response.json();
	return data.cards;
}
</script>

<template>
	<div class="search-wrapper">
		<div class="flex">
			<div>
				<img class="mtg-logo" src="https://diversionsgames.com/wp-content/uploads/2020/12/magic-logo-300x102.png" />
			</div>
			<h1 class="header-text">MTG Card Database</h1>
			<form @submit.prevent="getCards" class="mtg-form flex" style="gap: 0">
				<input v-model="input" type="text" placeholder="Card Name" />
				<button type="submit">Search</button>
			</form>
		</div>
	</div>
	<SearchBanner />
</template>

<style scoped>
.search-wrapper {
	background: #ededed;
	padding: 20px;
}
.mtg-logo {
	width: 160px;
	margin-right: 50px;
	border-right: 2px solid var(--theme-primary-color--300);
	padding-right: 50px;
}
.flex {
	display: flex;
	align-items: center;
	gap: 20px;
	justify-content: space-between;
}
.mtg-form {
	flex-grow: 1;
}
.header-text {
	font-size: 24px;
}
:deep(.mtg-form input) {
	width: 100%;
}
</style>
