<template>
	<div class="AuthForm">
		<b-container>
			<transition name="fade" mode="out-in">
				<div v-if="!existingAccount" key="1">
					<b-form class="my-5">
						<b-form-group
							label="Votre adresse email:"
							id="input-group-1"
							label-for="email"
							description="Votre adresse mail sera utilisée comme identifiant de connexion"
						>
							<b-form-input id="email" v-model="email" type="email" required placeholder="Email"></b-form-input>
						</b-form-group>
						<b-form-group label="Votre mot de passe:" id="input-group-2" label-for="password">
							<b-form-input id="password" v-model="password" type="password" required placeholder="Mot de passe"></b-form-input>
						</b-form-group>

						<b-button variant="success" size="lg" class="mt-3" @click.prevent="signup">Créer un compte</b-button>
					</b-form>
					<a @click.prevent="asAnAccount">J'ai déjà un compte !</a>
				</div>
				<div v-else key="2">
					<b-form class="my-5">
						<b-form-group
							label="Votre adresse email:"
							id="input-group-1"
							label-for="email"
							description="Votre adresse mail sera utilisée comme identifiant de connexion"
						>
							<b-form-input id="email" v-model="email" type="email" required placeholder="Email"></b-form-input>
						</b-form-group>
						<b-form-group label="Votre mot de passe:" id="input-group-2" label-for="password">
							<b-form-input
								id="password"
								v-model="password"
								type="password"
								required
								placeholder="Mot de passe"
								@keyup.enter="logIn"
							></b-form-input>
						</b-form-group>

						<b-button variant="success" size="lg" class="mt-3" @click.prevent="logIn">Se connecter</b-button>
					</b-form>
					<a @click.prevent="asAnAccount">Je n'ai pas de compte</a>
				</div>
			</transition>
		</b-container>
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
			id: "",
			token: "",
			prenom: "",
			nom: "",
			poste: "",
			logSuccess: false,
			errorMessage: "",
		};
	},
	computed: {
		...mapState(["user", "existingAccount"]),
	},
	watch: {
		logSuccess() {
			if (this.logSuccess) {
				if (this.prenom == null || this.nom == null || this.poste == null) {
					let userInfos = {
						email: this.email,
						token: this.token,
						id: this.id,
					};
					this.userInitFromParams(userInfos);

					LS.set("email", this.user.email);
					LS.set("token", this.user.token);
					LS.set("id", this.user.id);

					this.setAuth(true);
					this.$router.push({ name: "Identity" });
				} else {
					let userInfos = {
						email: this.email,
						token: this.token,
						prenom: this.prenom,
						nom: this.nom,
						poste: this.poste,
						id: this.id,
					};
					this.userInitFromParams(userInfos);

					LS.set("email", this.user.email);
					LS.set("token", this.user.token);
					LS.set("prenom", this.user.prenom);
					LS.set("nom", this.user.nom);
					LS.set("poste", this.user.poste);
					LS.set("id", this.user.id);

					this.setAuth(true);
					this.$router.push({ name: "Home" });
				}
			}
		},
		errorMessage() {
			this.setErrorMessage(this.errorMessage);
		},
	},
	methods: {
		...mapActions(["userInitFromParams", "accountDoNotExists", "accountExists", "setAuth", "setErrorMessage", "unsetErrorMessage"]),
		signup() {
			auth.signup(this);
			this.unsetErrorMessage();
		},
		logIn() {
			auth.logIn(this);
			this.unsetErrorMessage();
		},
		asAnAccount() {
			if (this.existingAccount) {
				this.accountDoNotExists();
			} else {
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

<style scoped lang="scss"></style>
