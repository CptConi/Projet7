<template>
	<div class="home">
		<h1 id="mainTitle" class="display-1">Firepit</h1>
		<transition name="fade" mode="out-in">
			<h2 class="mt-3 d-none d-sm-inline" v-if="existingAccount" key="1">🔥 Il reste une place autour du feu 🔥</h2>
			<h2 class="mt-3 d-none d-sm-inline" v-else key="2">🔥 Bienvenue sur Firepit 🔥</h2>
		</transition>
		<b-container>
			<b-row>
				<b-col>
					<b-alert v-show="errorMessage" show variant="danger" dismissible>{{ errorMessage }}</b-alert>
				</b-col>
			</b-row>
		</b-container>
		<AuthForm></AuthForm>
		<FirepitAnimated />
		<Footer></Footer>
	</div>
</template>

<script>
import AuthForm from "../components/AuthForm";
import FirepitAnimated from "@/components/Firepit-Animated.vue";
import Footer from '../components/Footer'

import LS from "../services/StorageManager";
import { mapState, mapActions } from "vuex";

export default {
	name: "Authentification",
	components: { AuthForm, FirepitAnimated, Footer },
	data() {
		return {};
	},
	computed: {
		...mapState(["existingAccount", "errorMessage"]),
	},

	methods: {
		...mapActions(["accountExists", "accountDoNotExists"]),
	},
	//=============================================HOOKS========================================
	mounted() {
		if (LS.asAccount) {
			this.accountExists();
		} else {
			this.accountDoNotExists();
		}
	},
};
</script>

<style lang="scss">
#mainTitle {
	font-family: "kaushan script";
}

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
