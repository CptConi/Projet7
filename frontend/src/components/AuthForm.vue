<template>
	<div class="AuthForm">
		<div v-if="!asAnAccount">
			<form>
				<label for="email">Votre email 💌</label>
				<input type="email" v-model="email" id="email" required />
				<label for="email">Votre Mot de Passe 🔣</label>
				<input type="password" v-model="password" id="password" required />

				<button @click.prevent="signup"><strong>Créer un compte</strong></button>
			</form>
			<a @click.prevent="asAnAccount = !asAnAccount">J'ai déjà un compte !</a>
		</div>
		<div v-else>
			<form>
				<label for="email">Votre email 💌</label>
				<input type="email" v-model="email" id="email" required />
				<label for="email">Votre Mot de Passe 🔣</label>
				<input type="password" v-model="password" id="password" required />

				<button @click.prevent="logIn"><strong>Se connecter</strong></button>
			</form>
			<a @click.prevent="asAnAccount = !asAnAccount">Je n'ai pas de compte</a>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import auth from "../services/Auth";

export default {
	name: "Authentification",
	data() {
		return {
			...mapState(["user"]),
			email: "",
			password: "",
			asAnAccount: "false",
		};
	},
	methods: {
		...mapActions(["userUpdateLoginInfos"]),
		signup() {
			auth.signup();
		},
		logIn() {
			auth.logIn();
		},
	},
	mounted() {
		this.$signup = this.$resource("user/signup");
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
