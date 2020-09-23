<template>
	<div>
		<b-alert show dismissible>
			<p for="email">Vous êtes connecté(e) en tant que:</p>
			<h3>{{ user.email }}</h3>
		</b-alert>

		<b-form class="profile__Form">
			<b-form-group label="Votre Prénom:" id="input-group-1" label-for="prenom">
				<b-form-input
					id="prenom"
					v-model="prenom"
					type="text"
					required
					placeholder="Prénom"
				></b-form-input>
			</b-form-group>
			<b-form-group
				label="Votre nom:"
				id="input-group-2"
				label-for="nom"
				description="Il s'agit d'un outil de communication professionel. Merci d'utiliser votre véritable identitée."
			>
				<b-form-input
					id="nom"
					v-model="nom"
					type="text"
					required
					placeholder="Nom"
				></b-form-input>
			</b-form-group>
			<b-form-group description="Votre poste au sein de Groupomania">
				<b-form-select v-model="poste" :options="options"></b-form-select
			></b-form-group>

			<b-button
				variant="success"
				class="ml-auto mt-4"
				size="lg"
				@click.prevent="submitChanges"
			>
				Je valide ces informations
			</b-button>
		</b-form>
		<b-button
			variant="outline-danger"
			class="mt-2 mx-auto"
			size="sm"
			@click.prevent="deleteAccount"
		>
			Supprimer le profil
		</b-button>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LS from "../services/StorageManager";
import userService from "../services/UserService";

export default {
	data() {
		return {
			prenom: "",
			nom: "",
			poste: "",
			options: [
				{ value: null, text: "Votre poste au sein de la société", disabled: true },
				{ value: 1, text: "Employé" },
				{ value: 2, text: "Manager" },
				{ value: 3, text: "Membre des Ressources Humaines" },
				{ value: 4, text: "Direction" },
			],
		};
	},
	methods: {
		...mapActions(["userUpdateCommonInfos", "userInitFromLS"]),
		submitChanges() {
			userService.update(this);
			LS.set("prenom", this.prenom);
			LS.set("nom", this.nom);
			LS.set("poste", this.poste);
			this.userUpdateCommonInfos({
				prenom: this.prenom,
				nom: this.nom,
				poste: this.poste,
			});
		},
		deleteAccount() {
			if (window.confirm("Etes-vous certain de vouloir supprimer votre compte ?")) {
				userService.destroy(this);
			}
		},
		closeSettings() {
			this.$emit("close-settings");
		},
	},
	computed: {
		...mapState(["user"]),
	},
	mounted() {
		this.$user = this.$resource("user{/id}");
		//Auto-fill inputs
		LS.initVuexUser(this);
		this.userUpdateCommonInfos({
			prenom: LS.user.prenom,
			nom: LS.user.nom,
			poste: LS.user.poste,
		});
		//A modifier, doit employer une Action et COMMIT:
		this.user.email = LS.user.email;
		this.prenom = LS.user.prenom;
		this.nom = LS.user.nom;
		this.poste = LS.user.poste;
	},
};
</script>

<style scoped lang="scss">
.profile__Form {
	padding: 1.5em;
	background-color: rgba(0, 0, 0, 0.15);
}
</style>
