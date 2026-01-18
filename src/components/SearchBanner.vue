<script setup>
import { searchQuery, searchProgress, searchResults } from "@/AppState";
</script>
<template>
	<div class="search-banner" v-if="searchQuery">
		<span>
			Searching for: <strong class="highlight">{{ searchQuery }}</strong></span
		>
		<span v-if="searchResults && searchResults.length">
			| Results:
			<strong class="highlight">{{ searchResults.length }}</strong>
		</span>
	</div>
</template>

<style scoped>
.search-banner {
	background: var(--theme-primary-color--100);
	border-top: 2px solid var(--theme-primary-color--300);
	padding: 10px 40px;
}
.highlight {
	border: 1px solid;
	border-radius: 6px;
	background: white;
	padding: 2px 5px;
}
</style>
