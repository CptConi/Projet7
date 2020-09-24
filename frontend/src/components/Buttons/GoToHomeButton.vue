<template>
	<div>
		<b-button variant="outline" size="sm" class="goToHome__btn" @click.stop="goToHome">
				<b-icon-house class="goToHome__btn"></b-icon-house>
		</b-button>
	</div>
</template>

<script>
export default {
	name: "GoToHomeButton",
	methods: {
		goToHome() {
			this.$router.push({ name: "Home" });
		},
	},
};
</script>

<style scoped lang="scss">
.goToHome {
	&__btn {
		position: fixed;
		left: 60px;
		top: 10px;
		color: white;
		width: 45px;
		height: 45px;
		z-index:100000000000000;
	}
	
}
</style>
