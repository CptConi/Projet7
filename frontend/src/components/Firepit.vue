<template>
	<div></div>
</template>

<script>
export default {
	name: "Firepit",
	data() {
		return {};
	},
	computed: {},

	mounted() {
		this.$user = this.$resource("user{/id}");
	},
};
</script>

<style></style>
