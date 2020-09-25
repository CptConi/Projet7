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
	mounted(){
		this.$signup = this.$resource("user/signup");
		this.$login = this.$resource("user/login");
	}
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
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
	text-decoration: none;
	cursor: pointer;
}
</style>
