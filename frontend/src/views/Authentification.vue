<template>
	<div class="home">
		<h1 class="mt-3">{{ displayTitle }}</h1>
		<transition name="fade" mode="out-in">
			<AuthForm></AuthForm>
		</transition>
		<FirepitAnimated />
	</div>
</template>

<script>
// @ is an alias to /src
import AuthForm from "../components/AuthForm";
import FirepitAnimated from "@/components/Firepit-Animated.vue";

import LS from "../services/StorageManager";
import { mapState, mapActions } from "vuex";

export default {
	name: "Authentification",
	components: { AuthForm, FirepitAnimated },
	data() {
		return {
		};
	},
	computed: {
		...mapState(['existingAccount']),
		displayTitle() {
			if (this.existingAccount) {
				return "🔥 Il reste une place autour du feu 🔥";
			} else {
				return "🔥 Bienvenue sur Firepit 🔥";
			}
		},
	},

	methods: {
		...mapActions(["accountExists", "accountDoNotExists"]),
		},
	mounted() {
		console.log("Cheking if LocalStorage Key exists \n >", LS.asAccount());
		if(LS.asAccount){
			this.accountExists();
		}else{
			this.accountDoNotExists();
		}
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
