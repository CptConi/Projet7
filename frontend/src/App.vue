<template>
	<div id="app">
		<Test v-show="testZoneVisible"></Test>
		<router-view />
	</div>
</template>

<script>
import Test from "./components/Test";
export default {
	name: "App",
	data() {
		return {
			testZoneVisible: true,
		};
	},
	components: { Test },
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #cdd0d3;

	margin: 0;
}

a {
	font-weight: bold;
	color: #dfa019;
	text-decoration: none;
	cursor: pointer;
}
</style>
