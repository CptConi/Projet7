<template>
	<div>
			<b-card-group deck class="justify-content-center">
					<b-card class="mb-4">
						<b-card-title class="h2">{{sujet}}</b-card-title>
						<b-card-text>
							<p>Créé par: {{auteur}}</p>
						</b-card-text>
						<b-button @click.stop="goToFirepit(id)" variant="outline-success" class="mb-3">
							S'assoir autour du feu
							<b-icon-chat-left-dots-fill class="ml-2"></b-icon-chat-left-dots-fill>
						</b-button>
						<b-card-text class="small text-muted pb-0">Allumé le: {{ date }}</b-card-text>
					</b-card>
			</b-card-group>
		<!-- Modal New Firepit Integration Component -->
		<b-container>
			<NewFirePitModal></NewFirePitModal>
		</b-container>
	</div>
</template>

<script>
import NewFirePitModal from "../components/NewFirepitModal";

export default {
	name: "Firepit",
	components: { NewFirePitModal },
	props: { sujet: String, prenom: String, nom: String, date: String, id: Number },
	computed: {
		auteur(){
			return this.prenom + ' ' + this.nom;
		}
	},
	methods: {
		goToFirepit(firepitId) {
			this.$router.push({ name: "Firepitview", params: { id: firepitId } });
		},
	},
};
</script>

<style lang="scss">

.addFirepit {
	width: 90px;
	height: 90px;
	color: white;
}
</style>
