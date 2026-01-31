export async function fetchAllScryfallCards(query) {
	let url = `https://api.scryfall.com/cards/search?q=${encodeURIComponent(query)}`;
	let allCards = [];

	while (url) {
		const res = await fetch(url);
		const data = await res.json();

		allCards.push(...data.data);
		url = data.has_more ? data.next_page : null;
	}

	return allCards;
}

export async function getCardById(id) {
	let url = `https://api.scryfall.com/cards/${encodeURIComponent(id)}`;
	const res = await fetch(url);
	const data = await res.json();
	return data;
}
