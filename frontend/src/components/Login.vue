<template>
	<div class="login">
		<form>
			<label for="email">Votre email 💌</label>
			<input type="email" v-model="email" id="email" required />
			<label for="email">Votre Mot de Passe 🔣</label>
			<input type="password" v-model="password" id="password" required />

			<button @click.prevent="logIn"><strong>Se connecter</strong></button>
		</form>
		<a @click.prevent="asAnAccount()">Je n'ai pas de compte</a>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "Login",
	components: {},
	data() {
		return {
			email: "",
			password: "",
		};
	},

	computed: { ...mapState(["user"]) },
	methods: {
		logIn() {
			this.$login.save({ email: this.email, password: this.password }).then(
				(response) => {
					if (response.status === 200) {
						// Utilisateur connecté !
						// Récupération du token en réponse:
						this.user.token = response.data.token;
						// Puis de l'adresse mail vérifiée:
						this.user.email = response.data.email;
					}
				},
				(responseError) => {
					console.log("ERREUR D'AUTHENTIFICATION", responseError);
				}
			);
		},

		asAnAccount() {
			this.$emit("as-an-account");
		},
	},
	mounted() {
		this.$login = this.$resource("user/login");
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
