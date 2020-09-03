<template>
	<div id="app">
		<!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">A propos</router-link>
    </div> -->
		<router-view />
	</div>
</template>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #cdd0d3;

	margin: 0;
}
body {
	background-color: #222034;
}
a {
	font-weight: bold;
	color: #dfa019;
	text-decoration: none;
	cursor: pointer;
}
</style>
