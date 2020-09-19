<template>
	<div>
		<form class="profile__Form">
			<button class="btn exit" @click.prevent="closeSettings">X</button>
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
import LS from '../services/StorageManager'
import userService from '../services/UserService'

export default {
	data() {
		return {
			
			prenom: "",
			nom: "",
			poste: "",
		};
	},
	methods: {
		...mapActions(["userUpdateCommonInfos"]),
		submitChanges() {
			userService.update(this);
			LS.set('prenom', this.prenom);
			LS.set('nom', this.nom);
			LS.set('poste', this.poste);
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
		closeSettings(){
			this.$emit('close-settings')
		}
	},
	computed: {
		...mapState(["user"]),
	},
	mounted(){
		this.$user = this.$resource('user');
		//Auto-fill inputs
		if (LS.get("email")) {
			this.user.email = LS.get("email");
		}
		if(LS.get('prenom')){
			this.prenom = LS.get('prenom');
		}
		if(LS.get('nom')){
			this.nom = LS.get('nom');
		}
		if(LS.get('poste')){
			this.poste = LS.get('poste');
		}
	}
};
</script>

<style lang="scss">
.profile__Form {
	display: flex;
	margin: auto;
	padding: 1.5em;
	flex-direction: column;
	width: 100%;

	background-color: rgba(0,0,0,0.15);
	backdrop-filter: blur(8px);
	border-radius: 10px;

	& .informative {
		display: flex;
		margin: auto;
		flex-direction: column;
	}
	& .modifiable {
		border-radius: 8px;
		border-color: gray;
		& input{
			margin-top: 0.5em;
			border-radius: 5px;
			border: none;
			height: 1.5em;
			text-align: center;
		}
		& select{
			margin-top: 0.5em;
			border-radius: 5px;
			border: none;
			height: 1.5em;
			text-align: center;
		}
	}
}

input {
	margin-bottom: 2em;
}

.btn {
	border-radius: 3px;
	border: none;
	cursor: pointer;
	transition: transform 0.1s;
	&.exit{
		
		background-color: transparent;
		color: white;
		position: fixed;
		right: 10px;
		top: 10px;
		outline: none;
		&:hover{
			transform: scale(1.5);
		}
	}
	&.validate {
		width: 180px;
		height: 60px;
		margin-top: 2em;
		margin-left: auto;
		background-color: lightgreen;
		&:hover{
			background-color: rgb(12, 196, 12);
			transform: scale(1.05);
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
			transform: scale(0.95);
		}
	}
}
</style>
