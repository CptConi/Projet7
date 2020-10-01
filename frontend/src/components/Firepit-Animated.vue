<template>
	<!-- <img src="" alt="Animated firepit GIF" id="firepitAnimated" /> -->
	<div id="firepitAnimated"></div>
</template>

<script>
export default {
	name: "FirepitAnimated",
};
</script>

<style lang="scss">
#firepitAnimated {
	position: fixed;
	background-size: contain;
	background-repeat: no-repeat;
	left: 50%;
	transform: translateX(-50%);
	top: 62%;
	opacity: 0.4;
	width: 30vh;
	height: 100%;
	z-index: -1;
	background-image: url("../assets/firepitAnimated.gif");
}
</style>
