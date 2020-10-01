<template>
	<div>
		<b-alert show dismissible>
			<p for="email">Vous êtes connecté(e) en tant que:</p>
			<h3 v-if="user.email">{{ user.email }}</h3>
			<h3 v-else>{{ email }}</h3>
		</b-alert>

		<b-form class="profile__Form">
			<b-form-group label="Votre Prénom:" id="input-group-1" label-for="prenom">
				<b-form-input id="prenom" v-model="prenom" type="text" :state="validFirst" placeholder="Prénom"></b-form-input>
			</b-form-group>
			<b-form-group
				label="Votre nom:"
				id="input-group-2"
				label-for="nom"
				description="Il s'agit d'un outil de communication professionel. Merci d'utiliser votre véritable identitée."
			>
				<b-form-input id="nom" v-model="nom" type="text" :state="validLast" placeholder="Nom"></b-form-input>
			</b-form-group>
			<b-form-group description="Votre poste au sein de Groupomania">
				<b-form-select v-model="poste" :options="options" :state="validJob"></b-form-select
			></b-form-group>
			<p v-show="errorMessage" class="text-danger">{{ errorMessage }}</p>
			<b-button variant="success" class="ml-auto mt-4" size="lg" @click.prevent="submitChanges">
				Je valide ces informations
			</b-button>
		</b-form>
		<b-button-group v-show="!identityView" class="mt-2">
			<b-button variant="outline-warning" size="sm" @click.stop="disconnectUser">Déconnexion</b-button>
			<b-button variant="outline-danger" size="sm" @click.stop="deleteAccount">
				Supprimer le profil
			</b-button>
		</b-button-group>
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
			validFirst: null,
			validLast: null,
			validJob:null,
			options: [
				{ value: null, text: "Votre poste au sein de la société", disabled: true },
				{ value: 1, text: "Employé" },
				{ value: 2, text: "Manager" },
				{ value: 3, text: "Membre des Ressources Humaines" },
				{ value: 4, text: "Direction" },
			],
		};
	},
	props: { identityView: { type: Boolean, default: false } },
	computed: {
		...mapState(["user", "errorMessage"]),
		email() {
			return LS.get("email");
		},
		
	},
		methods: {
		...mapActions(["userUpdateCommonInfos", "userInitFromParams", "setAuth", "setErrorMessage", "unsetErrorMessage"]),
		submitChanges() {
			this.unsetErrorMessage();
			if (this.validateInputs()) {
				userService.update(this);
				LS.set("prenom", this.prenom);
				LS.set("nom", this.nom);
				LS.set("poste", this.poste);
				this.userUpdateCommonInfos({
					prenom: this.prenom,
					nom: this.nom,
					poste: this.poste,
				});
				if (this.identityView) {
					this.$router.push({ name: "Home" });
				}
			} else {
				this.setErrorMessage("Veuillez renseigner toutes les informations");
			}
		},
		deleteAccount() {
			if (window.confirm("Etes-vous certain de vouloir supprimer votre compte ?")) {
				// Il faut en fait effectuer un update en retirant toutes les infos pour empêcher la reconnection au compte.
				userService.destroy(this);
				LS.unset("nom");
				LS.unset("prenom");
				LS.unset("email");
				LS.unset("id");
				LS.unset("poste");
				this.setErrorMessage("Le compte " + this.user.email + " a bien été supprimé");
				this.disconnectUser(this);
			}
		},
		disconnectUser() {
			LS.unset("token");
			this.setAuth(false);
			this.$router.push({ name: "Authentification" });
		},
		validPrenom() {
			let regex = new RegExp(/^[a-z ,.'-]+$/i);
			let validLenght;
			this.prenom.trim().length > 0 ? (validLenght = true) : (validLenght = false);
			if (!validLenght || !regex.test(this.prenom)) {
				return false;
			} else {
				return true;
			}
		},
		validNom() {
			let regex = new RegExp(/^[a-z ,.'-]+$/i);
			let validLenght;
			this.nom.trim().length > 0 ? (validLenght = true) : (validLenght = false);
			if (!validLenght || !regex.test(this.nom)) {
				return false;
			} else {
				return true;
			}
		},
		validPoste() {
			if (this.poste) {
				return true;
			} else {
				return false;
			}
		},
		validateInputs(){
			this.validFirst = this.validPrenom();
			this.validLast = this.validNom();
			this.validJob = this.validPoste();

			if(this.validFirst && this.validLast && this.validJob){
				return true;
			}else{
				return false;
			}
		}
	},
	//=============================================HOOKS========================================
	mounted() {
		//Auto-fill inputs
		this.prenom = this.user.prenom;
		this.nom = this.user.nom;
		this.poste = this.user.poste;
	},
};
</script>

<style scoped lang="scss">
.profile__Form {
	padding: 1.5em;
	background-color: rgba(0, 0, 0, 0.15);
}
@media (max-width: 576px) {  
  h3 {font-size:1rem;} /*1rem = 16px*/
}

</style>
