<template>
	<b-button variant="outline" size="sm" class="text-white goToHome__btn" @click.stop="goToHome">
		<b-icon-house class="goToHome__btn"></b-icon-house> Accueil
	</b-button>
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
		color: white;
	}
}
</style>
