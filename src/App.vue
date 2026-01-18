<script setup>
import SearchNav from "./components/SearchNav.vue";
</script>

<template>
	<div class="template-flex">
		<SearchNav />
		<div class="page-wrapper">
			<div class="page">
				<RouterView />
			</div>
		</div>
	</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap");

html,
body,
#app {
	margin: 0;
	padding: 0;
	height: 100%;
}
body {
	color: var(--base-font-color);
}

body,
input,
button {
	font-family: "MedievalSharp", cursive;
	font-weight: 400;
	font-style: normal;
	font-size: 16px;
}

a {
	color: var(--theme-link-color);
}
a:active {
	color: var(--theme-link-color--active);
}

:root {
	--button-color: #1f2026;
	--button-text-color: #ffffff;
	--theme-primary-color--100: #fddf8a;
	--theme-primary-color--200: #ff9013;
	--theme-primary-color--300: #eb2c06;
	--base-font-color: #222222;
	--theme-link-color: #ea3601;
	--theme-link-color--active: #b93b0d;
}

.template-flex {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	height: 100%;
}

input,
button {
	border: none;
	padding: 16px;
}
button {
	background: var(--button-color);
	color: var(--button-text-color);
}
.page-wrapper {
	flex-grow: 1;
	overflow: auto;
	position: relative;
}
.page {
	padding: 40px;
}
</style>
