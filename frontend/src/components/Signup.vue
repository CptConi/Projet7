<template>
	<div class="signup">
		<form>
			<label for="email">Votre email 💌</label>
			<input type="email" v-model="email" id="email" required />
			<label for="email">Votre Mot de Passe 🔣</label>
			<input type="password" v-model="password" id="password" required />

			<button @click.prevent="Signup()"><strong>Créer un compte</strong></button>
		</form>
		<a @click.prevent="asAnAccount()">J'ai déjà un compte !</a>
	</div>
</template>

<script>
const axios = require('axios');
export default {
	name: "Signup",
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		async Signup() {
			try {
				const response = await axios.post("http://localhost:8080/user/signup", {
					email : this.email,
					password : this.password
				});
				if(response.status === 201){
					console.log('Utilisateur créé avec l\'adresse mail ' + JSON.stringify(response.data.email));
					// Appel de LOGIN() dans la foulée, pour entre autre délivrer le token
				}
			} catch (err) {
				console.log(err);
			}
		},
		asAnAccount() {
			this.$emit("as-an-account");
		},
	},
};
</script>

<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
button {
	padding: 2em;
	border-radius: 5px;
}
form {
	display: flex;
	flex-direction: column;
	width: 30vh;
	justify-content: space-between;
	margin: auto;
	margin-bottom: 2em;
	& input {
		margin-bottom: 2em;
	}
}
</style>
