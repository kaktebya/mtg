import { ref } from 'vue'

export const searchResults = ref()

export const searchQuery = ref()

export const searchProgress = ref(false);

export const getSymbols = async () => {
	const result = await fetch('https://api.scryfall.com/symbology');
	const data = await result.json();
	return data.data
}
