<template>
	<div class="home">
		<Title>{{ displayTitle }}</Title>
		<transition name="fade" mode="out-in">
			<Login v-if="asAccount" v-on:as-an-account="asAccount = !asAccount" />
			<Signup v-if="!asAccount" v-on:as-an-account="asAccount = !asAccount" />
		</transition>
		<FirepitAnimated />
	</div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import Title from "@/components/Title.vue";
import Signup from "@/components/Signup.vue";
import FirepitAnimated from "@/components/Firepit-Animated.vue";

export default {
	name: "Authentification",
	components: { Login, Title, Signup, FirepitAnimated },
	data() {
		return {
			asAccount: false,
		};
	},
	computed: {
		displayTitle() {
			if (this.asAccount) {
				return "🔥 Il reste une place autour du feu 🔥";
			} else {
				return "🔥 Bienvenue sur Firepit 🔥";
			}
		},
	},

	methods: {},
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: all 0.25s ease-in-out;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
	filter: blur(7px);
}
</style>
