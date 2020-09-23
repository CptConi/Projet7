<template>
	<div class="firepits">
		<b-container>
			<!-- New Firepit -->
			<b-row class="justify-content-center mb-4">
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
				class="text-white mb-2"
				><b-icon-arrow-clockwise :animation="spinAnimation"></b-icon-arrow-clockwise
			></b-button>
			<!-- Existing Firepits -->
			<b-row>
				<b-card-group deck class="justify-content-center">
					<div v-for="fp in reqResponse" :key="fp.id">
						<b-card class="mb-4">
							<b-card-title class="h2">{{ fp.sujet }}</b-card-title>
							<b-card-text>
								<p>
									Créé par: {{ fp.utilisateur.prenom }} {{ fp.utilisateur.nom }}
								</p>
							</b-card-text>
							<b-button @click.stop="goToFirepit(fp.id)" variant="outline-success" class="mb-3">
								S'assoir autour du feu
								<b-icon-chat-left-dots-fill
									class="ml-2"
								></b-icon-chat-left-dots-fill>
							</b-button>
							<b-card-text class="small text-muted pb-0"
								>Allumé le: {{ fp.createdAt.substr(0, 10) }}</b-card-text
							>
						</b-card>
					</div>
				</b-card-group>
			</b-row>
		</b-container>
		<!-- Modal New Firepit Integration Component -->
		<b-container>
			<NewFirePitModal v-on:event-refresh-firepits="refreshFirepits"></NewFirePitModal>
		</b-container>
	</div>
</template>

<script>
import FirepitService from "../services/FirepitService";
import NewFirePitModal from "../components/NewFirepitModal";

export default {
	name: "Firepit",
	components: { NewFirePitModal },
	data() {
		return {
			reqResponse: "",
			refreshSpin: false,
		};
	},
	computed: {
		spinAnimation() {
			return this.refreshSpin ? "spin" : "noAnim";
		},
		// reqResponse(){
		// 	return reqResponse;
		// }
	},
	methods: {
		refreshFirepits() {
			FirepitService.getAll(this);
		},
		goToFirepit(firepitId){
			this.$router.push({ name: "Firepitview", params: { id: firepitId } });
		}
	},

	mounted() {
		this.$user = this.$resource("user{/id}");
		this.$firepit = this.$resource("firepit{/id}");

		FirepitService.getAll(this);
	},
};
</script>

<style lang="scss">
.firepits {
	margin-top: 5em;
}

.addFirepit {
	width: 90px;
	height: 90px;
	color: white;
}

.grow {
	&:hover {
		transform: scale(1.05);
	}
}
</style>
