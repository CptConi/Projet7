<template>
	<div class="signup">
		<form>
			<label for="email">Votre email 💌</label>
			<input type="email" v-model="email" id="email" required />
			<label for="email">Votre Mot de Passe 🔣</label>
			<input type="password" v-model="password" id="password" required />

			<button @click.prevent="signup"><strong>Créer un compte</strong></button>
		</form>
		<a @click.prevent="asAnAccount()">J'ai déjà un compte !</a>
	</div>
</template>

<script>
export default {
	name: "Signup",
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		signup() {
			this.$signup.save({ email: this.email, password: this.password }).then(
				(response) => {
					if (response.status === 201) {
						console.log(
							"Utilisateur créé avec l'adresse mail " +
								JSON.stringify(response.data.email)
						);
					}
				},
				(responseError) => {
					console.log("ERREUR SERVEUR", responseError);
				}
			);
		},
		asAnAccount() {
			this.$emit("as-an-account");
		},
	},
	mounted() {
		this.$signup = this.$resource("user/signup");
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
