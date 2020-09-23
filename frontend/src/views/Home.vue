<template>
	<div>
		<!-- BUTTONS -->
		<SettingsButton></SettingsButton>
		<GoToHomeButton></GoToHomeButton>
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
					v-for="fp in reqResponse"
					:key="fp.id"
					:sujet="fp.sujet"
					:prenom="fp.utilisateur.prenom"
					:nom="fp.utilisateur.nom"
					:date="fp.createdAt"
					:id="fp.id"
				></Firepit>
			</b-row>
		</b-container>
		<FirepitAnimated></FirepitAnimated>
	</div>
</template>

<script>
import FirepitService from "../services/FirepitService";
import { mapState } from "vuex";

import FirepitAnimated from "../components/Firepit-Animated";
import SettingsButton from "../components/Buttons/SettingsButton";
import GoToHomeButton from "../components/Buttons/GoToHomeButton";
import Firepit from "../components/Firepit";

export default {
	data() {
		return {
			refreshSpin: false,
			reqResponse: "",
		};
	},
	components: { SettingsButton, Firepit, FirepitAnimated, GoToHomeButton },
	computed: {
		...mapState(["user"]),
		spinAnimation() {
			return this.refreshSpin ? "spin" : "noAnim";
		},
	},
	methods: {
		refreshFirepits() {
			FirepitService.getAll(this);
		},
	},
	mounted() {
		this.$user = this.$resource("user{/id}");
		this.$firepit = this.$resource("firepit{/id}");

		FirepitService.getAll(this);
	},
};
</script>

<style scoped lang="scss">
.grow {
	&:hover {
		transform: scale(1.05);
	}
}
</style>
