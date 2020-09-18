<template>
	<div class="home">
		<Title>{{ displayTitle }}</Title>
		<transition name="fade" mode="out-in">
			<AuthForm></AuthForm>
		</transition>
		<FirepitAnimated />
	</div>
</template>

<script>
// @ is an alias to /src
import AuthForm from "../components/AuthForm";
import Title from "@/components/Title.vue";
import FirepitAnimated from "@/components/Firepit-Animated.vue";
import { mapState, mapActions } from "vuex";

export default {
	name: "Authentification",
	components: { AuthForm, Title, FirepitAnimated },
	data() {
		return {
			asAccount: false,
		};
	},
	computed: {
		...mapState([]),
		displayTitle() {
			if (this.asAccount) {
				return "🔥 Il reste une place autour du feu 🔥";
			} else {
				return "🔥 Bienvenue sur Firepit 🔥";
			}
		},
	},

	methods: {
		...mapActions(['accountExists','accountDoNotExists']),
	},
	beforeMount() {
		
	},
};
</script>

<style lang="scss">
//Animations
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
