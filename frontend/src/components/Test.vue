<template>
	<div class="Test__Component">
		<h1>Zone de test</h1>
		<div>
			<button class="btn" @click="createFirepits">Create firepits</button>
			<button class="btn" @click="createMessages">Create messages</button>
			<button class="btn" @click="createUsers">Create users</button>
			<button class="btn" @click="createAll">Create All</button>
		</div>
	</div>
</template>

<script>
import Auth from "../services/Auth";
import UserService from "../services/UserService";
// import Auth from "../services/Auth";
// import UserService from "../services/UserService";
// import FirepitService from "../services/FirepitService";

export default {
	name: "Test",
	data() {
		return {
			email: "",
			password: "",
			user: { id: "", email: "" },
			userList: [
				{
					email: "hermione.granger@poudlard.uk",
					password: "hermione",
					prenom: "Hermione",
					nom: "Granger",
                    poste: "",
                    id: 2
				},
				{
					email: "harry.potter@poudlard.uk",
					password: "harry",
					prenom: "Harry",
					nom: "Potter",
                    poste: "",
                    id: 3
				},
				{
					email: "drago.malefoy@poudlard.uk",
					password: "drago",
					prenom: "Drago",
					nom: "Malefoy",
                    poste: "",
                    id: 4
				},
				{
					email: "voldemort@deatheaters.uk",
					password: "tom",
					prenom: "Tom",
					nom: "Riddle",
                    poste: "",
                    id: 5
				},
				{
					email: "ron.weasley@poudlard.uk",
					password: "ronald",
					prenom: "Ronald",
					nom: "Weasley",
                    poste: "",
                    id: 6
				},
				{
					email: "albus.dumbledore@poudlard.uk",
					password: "albus",
					prenom: "Albus",
					nom: "Dumbledore",
                    poste: "",
                    id: 7
				},
			],
		};
	},
	methods: {
		createFirepits() {
			console.log("Méthode createFirepits pas encore implémentée, Work in progress");
		},
		createMessages() {
			console.log("Méthode createMessages pas encore implémentée, Work in progress");
		},
		createUsers() {
			console.log("Méthode createUsers en cours d'implémentation, Work in progress");
			for (let user of this.userList) {
				this.email = user.email;
				this.password = user.password;
				this.prenom = user.prenom;
				this.nom = user.nom;
				this.poste = user.poste;
				Auth.createUser(this);
                this.user.email = user.email;
                this.user.id = user.id;
				UserService.update(this);
			}
		},
		createAll() {
			console.log("Méthode createAll pas encore implémentée, Work in progress");
		},
	},
	mounted() {
		this.$firepit = this.$resource("firepit{/id}");
		this.$message = this.$resource("message{/id}");
		this.$user = this.$resource("user{/id}");
		this.$signup = this.$resource("user/signup");
	},
};
</script>

<style scoped lang="scss">
.Test__Component {
	display: flex;
	flex-direction: column;
}
.btn {
	cursor: pointer;
	margin-left: 1em;
	margin-right: 1em;
}
</style>
