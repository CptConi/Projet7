<template>
	<div>
		<form class="profile__Form">
			<h1>Votre profile</h1>
			<div class="informative">
				<label for="email">Votre email professionnel:</label>
				<h3>{{ email }}</h3>
			</div>
			<fieldset class="modifiable">
				<label for="prenom">Votre Prénom:</label>
				<br />
				<input type="text" name="prenom" v-model="prenom"/>
				<br />
				<label for="prenom">Votre Nom:</label>
				<br />
				<input type="text" name="nom" v-model="nom"/>
				<br />
				<label for="poste">Votre poste au sein de la société</label>
				<br />
				<select name="poste">
					<option value="1">Poste 1</option>
					<option value="2">Poste 2</option>
					<option value="3">Poste 3</option>
					<option value="4">Poste 4</option>
				</select>
			</fieldset>
			<button class="btn validate" @click.prevent="submitChanges">
				Je valide ces informations
			</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//Pour tester l'affichage:
			email: "Mail@mail.fr",
		};
	},
	methods: {
		submitChanges(profileInfos) {
			return profileInfos;
		},
	},
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
	width: 180px;
	height: 60px;
	margin-top: 3em;
	margin-left: auto;
	border: none;
}
</style>
