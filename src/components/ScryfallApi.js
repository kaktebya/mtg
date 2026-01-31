export default async function fetchAllScryfallCards(query) {
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
