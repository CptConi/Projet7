<template>
	<div class="login">
		
			<form>
				<label for="email">Votre email 💌</label>
				<input type="email" v-model="email" id="email" required />
				<label for="email">Votre Mot de Passe 🔣</label>
				<input type="password" v-model="password" id="password" required />

				<button @click.prevent="LogIn()"><strong>Se connecter</strong></button>
			</form>
			<a @click.prevent="asAnAccount()">Je n'ai pas de compte</a>
		
	</div>
</template>

<script>
const axios = require("axios");
export default {
	name: "Login",
	components: {},
	data() {
		return {
			email: "",
			password: "",
		};
	},
	props: {
		msg: String,
	},
	methods: {
		async LogIn() {
			try {
				const response = await axios.post("http://localhost:8080/user/login", {
					email: this.email,
					password: this.password
				});
				if(response.status === 200){
					// Utilisateur connecté !
					console.log('Utilisateur connecté !')
					//Pour récupérer le token et l'adresse mail de connexion:
					//response.data.email
					//response.data.token
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
