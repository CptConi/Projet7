<template>
	<div class="AuthForm">
		<div v-if="!existingAccount">
			<form>
				<label for="email">Votre email 💌</label>
				<input type="email" v-model="email" id="email" required />
				<label for="email">Votre Mot de Passe 🔣</label>
				<input type="password" v-model="password" id="password" required />

				<button @click.prevent="signup"><strong>Créer un compte</strong></button>
			</form>
			<a @click.prevent="asAnAccount">J'ai déjà un compte !</a>
		</div>
		<div v-else>
			<form>
				<label for="email">Votre email 💌</label>
				<input type="email" v-model="email" id="email" required />
				<label for="email">Votre Mot de Passe 🔣</label>
				<input type="password" v-model="password" id="password" required />

				<button @click.prevent="logIn"><strong>Se connecter</strong></button>
			</form>
			<a @click.prevent="asAnAccount">Je n'ai pas de compte</a>
		</div>
		
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import auth from "../services/Auth";
import LS from "../services/StorageManager";

export default {
	name: "Authentification",
	data() {
		return {
			email: "",
			password: "",
		};
	},
	computed: {
		...mapState(["user", "existingAccount"]),
		whatsInLocalStorage() {
			return LS.get("email");
		},
	},
	methods: {
		...mapActions(["userUpdateLoginInfos", "accountDoNotExists", "accountExists"]),
		signup() {
			auth.signup(this);
		},
		logIn() {
			LS.set('email', this.email)
			auth.logIn(this);
		},
		asAnAccount() {
			if (this.existingAccount) {
				console.log("Account do not exist.", this.existingAccount);
				this.accountDoNotExists();
			} else {
				console.log("Account exists.", this.existingAccount);
				this.accountExists();
			}
		},
		
	},
	mounted() {
		this.$signup = this.$resource("user/signup");
		this.$login = this.$resource("user/login");

		//Auto-fill email input
		if (LS.get("email")) {
			this.email = LS.get("email");
		}
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
