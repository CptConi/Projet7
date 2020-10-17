<template>
	<div>
		<Navbar class="sticky-top"></Navbar>
		<!-- FIREPITS // POSTS -->
		<b-container>
			<!-- New Firepit -->
			<b-row class="justify-content-center mb-2 mt-5">
				<b-card title="Nouveau Sujet">
					<b-button v-b-modal.modalNewFirepit variant="outline" class="grow">
						<b-icon-plus-circle class="addFirepit"></b-icon-plus-circle>
					</b-button>
				</b-card>
			</b-row>
			<b-button
				@mouseover="refreshSpin = true"
				@mouseleave="refreshSpin = false"
				@click.prevent="refreshFirepits"
				variant="outline"
				class="text-white"
				><b-icon-arrow-clockwise :animation="spinAnimation"></b-icon-arrow-clockwise
			></b-button>
			<!-- Existing Firepits -->
			<b-row class="justify-content-around mb-3">
				<Firepit
					v-show="!loader"
					v-for="fp in reqResponse"
					:key="fp.id"
					:sujet="fp.sujet"
					:auteur="fp.utilisateur"
					:date="fp.createdAt"
					:id="fp.id"
				></Firepit>
			</b-row>
		</b-container>
		<!-- Modal New Firepit Integration Component -->
		<b-container>
			<NewFirePitModal></NewFirePitModal>
		</b-container>
		<FirepitAnimated></FirepitAnimated>
		<Footer></Footer>
	</div>
</template>

<script>
import FirepitService from "../services/FirepitService";
import { mapState, mapActions } from "vuex";
import LS from "../services/StorageManager";
import Auth from "../services/Auth";

import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import NewFirePitModal from "../components/NewFirepitModal";
import FirepitAnimated from "../components/Firepit-Animated";
import Firepit from "../components/Firepit";

export default {
	name: "Home",
	data() {
		return {
			refreshSpin: false,
			reqResponse: "",
			loader: true,
			authTokenCheck: "",
		};
	},
	components: { Firepit, FirepitAnimated, Navbar, NewFirePitModal, Footer },
	computed: {
		...mapState(["user"]),
		spinAnimation() {
			return this.refreshSpin ? "spin" : "noAnim";
		},
	},
	methods: {
		...mapActions(["userInitFromParams", "setErrorMessage"]),
		refreshFirepits() {
			FirepitService.getAll(this);
		},
	},
	watch: {
		reqResponse() {
			if (this.reqResponse === "") {
				this.loader = true;
			} else {
				this.loader = false;
			}
		},
		authTokenCheck() {
			if (Auth.isTokenExpired(this.authTokenCheck)) {
				this.setErrorMessage('Veuillez vous connecter pour accéder à votre espace de discussion Firepit')
				this.$router.push({ name: "Authentification" });
			}
		},
	},
	//==========================HOOKS===============================

	beforeMount() {
		//Mise à jour des infos token contenues dans VueX via LocalStorage
		LS.initUser();
	},
	mounted() {
		FirepitService.getAll(this);
	},
};
</script>

<style lang="scss">
.grow {
	&:hover {
		transform: scale(1.05);
	}
}
.addFirepit {
	width: 90px;
	height: 90px;
	color: white;
}
</style>
