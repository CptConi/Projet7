<template>
	<div>
		<b-button variant="outline" size="sm" class="goToHome__btn" @click.stop="goToHome">
			<h2>
				<b-icon-house class="goToHome__icon"></b-icon-house>
			</h2>
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
		width: 50px;
		height: 50px;
	}
	&--icon {
	}
}
</style>
