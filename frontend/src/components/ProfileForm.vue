<template>
	<div>
		<form class="profile__Form">
			<h1>Votre profile</h1>
			<div class="informative">
				<label for="email">Votre email professionnel:</label>
				<h3>{{ user.email }}</h3>
			</div>
			<fieldset class="modifiable">
				<label for="prenom">Votre Prénom:</label>
				<br />
				<input type="text" name="prenom" v-model="prenom" required />
				<br />
				<label for="prenom">Votre Nom:</label>
				<br />
				<input type="text" name="nom" v-model="nom" required />
				<br />
				<label for="poste">Votre poste au sein de la société</label>
				<br />
				<select name="poste" required v-model="poste">
					<option value="1">Employé</option>
					<option value="2">Manager</option>
					<option value="3">Membre des ressources Humaines</option>
					<option value="3">Chargé de communication</option>
					<option value="4">PDG</option>
				</select>
			</fieldset>
			<button class="btn validate" @click.prevent="submitChanges">
				Je valide ces informations
			</button>
			<button class="btn deleteAccount" @click.prevent="deleteAccount">
				Supprimer le profil
			</button>
		</form>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
	data() {
		return {
			email: "",
			prenom: "",
			nom: "",
			poste: "",
		};
	},
	methods: {
		...mapActions(["userUpdateCommonInfos"]),
		submitChanges() {
			//TODO >>> PUT ACCOUNT + MAJ store Vuex sur code retour 200
			this.userUpdateCommonInfos({
				prenom: this.prenom,
				nom: this.nom,
				poste: this.poste,
			});
		},
		deleteAccount() {
			if (window.confirm("Etes-vous certain de vouloir supprimer votre compte ?")) {
				//TODO >>>> DELETE ACCOUNT
			}
		},
	},
	computed: {
		...mapState(["user"]),
	},
	mounted(){
		this.$delete = this.$resource('user/delete');
		this.$update = this.$resource('user/update');
	}
};
</script>

<style lang="scss">
.profile__Form {
	display: flex;
	margin: auto;
	flex-direction: column;
	width: 40%;
	& .informative {
		display: flex;
		margin: auto;
		flex-direction: column;
	}
	& .modifiable {
		border-radius: 8px;
		border-color: gray;
	}
}

input {
	margin-bottom: 2em;
}

.btn {
	border-radius: 3px;
	border: none;
	cursor: pointer;
	&.validate {
		width: 180px;
		height: 60px;
		margin-top: 2em;
		margin-left: auto;
		background-color: lightgreen;
		&:hover{
			background-color: rgb(12, 196, 12);
		}
	}
	&.deleteAccount {
		background-color: lightcoral;
		width: 100px;
		height: 60px;
		margin-left: auto;
		margin-top: 1em;
		&:hover {
			background-color: rgb(196,12,12);
		}
	}
}
</style>
