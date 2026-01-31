<script setup>
const props = defineProps({
	card: {
		required: true,
		type: Object,
	},
})
</script>
<template>
	<div class="no-image-card">
		<div class="name-bar">
			<div class="name">
				<strong>{{ props.card.name }}</strong>
			</div>
			<div class="cost" v-if="props.card.mana_cost">{{ props.card.mana_cost }}</div>
		</div>
		<div>Type: {{ props.card.type_line }}</div>
		<div>Rarity: {{ props.card.rarity }}</div>
		<div v-if="props.card.oracle_text" class="description">
			{{ props.card.oracle_text }}
			<div v-if="props.card.power && props.card.toughness" class="power">{{ props.card.power }}/{{ props.card.toughness }}</div>
		</div>
	</div>
</template>

<style scoped>
.no-image-card {
	height: 100%;
	border-radius: 15px;
	background: #e1e1e1;
	padding: 16px;
	box-sizing: border-box;
	overflow: auto;
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.name-bar {
	display: flex;
	justify-content: space-between;
	font-size: 16px;
}
.description {
	margin-top: auto;
	border: 1px solid;
	border-radius: 10px;
	padding: 10px;
	background: #f1f1f1;
	position: relative;
}
.power {
	position: absolute;
	bottom: -8px;
	right: -8px;
	border: 1px solid;
	border-radius: 5px;
	padding: 2px 5px;
	font-weight: bold;
	font-size: 14px;
	line-height: 1;
	background: white;
}
</style>
