<template>
	<div>
		<b-card-group deck class="justify-content-center">
			<b-card class="mb-4">
				<b-card-title class="h2">{{ sujet }}</b-card-title>
				<b-card-text>
					<p>Créé par: {{ formatedAuteur }}</p>
				</b-card-text>
				<b-button @click.stop="goToFirepit(id)" variant="outline-success" class="mb-3">
					S'assoir autour du feu
					<b-icon-chat-left-dots-fill class="ml-2"></b-icon-chat-left-dots-fill>
				</b-button>
				<b-card-text class="small text-muted pb-0">Allumé {{ formatedDate }}</b-card-text>
			</b-card>
		</b-card-group>
	</div>
</template>

<script>
import DateManager from "../services/DateManager";

export default {
	name: "Firepit",
	components: {},
	props: { sujet: String, auteur: Object, date: String, id: Number },
	computed: {
		formatedAuteur() {
			if (this.auteur) {
				return this.auteur.prenom + " " + this.auteur.nom;
			} else {
				return "Utilisateur supprimé";
			}
		},
		formatedDate() {
			return DateManager.formatDate(this.date);
		},
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
