<template>
	<div class="login">
		<Title>🔥 Bienvenue sur Firepit 🔥</Title>
		<form>
			<label for="email">Votre email 💌</label>
			<input type="email" v-model="email" id="email" required />
			<label for="email">Votre Mot de Passe 🔣</label>
			<input type="password" v-model="password" id="password" required />

			<button @click.prevent="createUser()"><strong>Créer un compte</strong></button>
		</form>
	</div>
</template>

<script>
const axios = require("axios");
import Title from "@/components/Title.vue";
export default {
	name: "Login",
	components: {
		Title,
	},
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
		async createUser() {
			try {
				const response = await axios.post("http://localhost:8080/user/create", {
					email: this.email,
					password: this.password,
				});
				console.log(response);
			} catch (err) {
				console.log(err);
			}
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
	& input {
		margin-bottom: 1em;
	}
}
a {
	color: #42b983;
}
ul {
	text-align: left;
	width: 100%;
	color: gray;
	& strong {
		color: black;
	}
}
</style>
