<template>
	<div class="Test__Component">
		<h1>Zone de test</h1>
		<p>
			A utiliser dans l'ordre pour éviter les erreurs de dépendances de clés en base de
			donnée:
		</p>
		<div>
			<div class="user">
				<button class="btn" @click="createUsers">1 - Create users</button>
			</div>
			<button class="btn" @click="createFirepits">3 - Create firepits</button>
			<button class="btn" @click="createMessages">4 - Create messages</button>
		</div>
	</div>
</template>

<script>
import UserService from "../services/UserService";
import FirepitService from "../services/FirepitService";

export default {
	name: "Test",
	data() {
		return {
			email: "",
			password: "",
			prenom: "",
			nom: "",
			poste: "",
			user: { id: "", email: "" },
			userList: [
				{
					email: "severus.snape@poudlard.uk",
					password: "severus",
					prenom: "Severus",
					nom: "Rogue",
					poste: "",
					id: 1,
				},
				{
					email: "hermione.granger@poudlard.uk",
					password: "hermione",
					prenom: "Hermione",
					nom: "Granger",
					poste: "",
					id: 2,
				},
				{
					email: "harry.potter@poudlard.uk",
					password: "harry",
					prenom: "Harry",
					nom: "Potter",
					poste: "",
					id: 3,
				},
				{
					email: "drago.malefoy@poudlard.uk",
					password: "drago",
					prenom: "Drago",
					nom: "Malefoy",
					poste: "",
					id: 4,
				},
				{
					email: "voldemort@deatheaters.uk",
					password: "tom",
					prenom: "Tom",
					nom: "Riddle",
					poste: "",
					id: 5,
				},
				{
					email: "ron.weasley@poudlard.uk",
					password: "ronald",
					prenom: "Ronald",
					nom: "Weasley",
					poste: "",
					id: 6,
				},
				{
					email: "albus.dumbledore@poudlard.uk",
					password: "albus",
					prenom: "Albus",
					nom: "Dumbledore",
					poste: "",
					id: 7,
				},
			],
			sujet: "",
			portee: "",
			firepitList: [
				{
					sujet: "Quelqu'un aurait-il vu mon rat Croutard ?",
					portee: "Tout le monde",
					id: 6,
				},
			],
		};
	},
	methods: {
		createFirepits() {
			console.log("Méthode createFirepits en cours d'implémentation, Work in progress");
			//TEST:
			for (let firepit of this.firepitList) {
				this.sujet = firepit.sujet;
				this.portee = firepit.portee;
				this.user.id = firepit.id;
				FirepitService.createFirepit(this);
			}
		},
		createMessages() {
			console.log("Méthode createMessages pas encore implémentée, Work in progress");
		},
		createUsers() {
			console.log("Méthode createUsers lancée");
			for (let user of this.userList) {
				window.setTimeout(() => {
					console.log("Création du compte: " + user.prenom + " " + user.nom);
					this.email = user.email;
					this.password = user.password;
					this.prenom = user.prenom;
					this.nom = user.nom;
					this.poste = user.poste;
					UserService.createTestUser(this);
				}, 3000);
			}
		},
	},
	mounted() {
		this.$firepit = this.$resource("firepit{/id}");
		this.$message = this.$resource("message{/id}");
		this.$user = this.$resource("user{/id}");
		this.$createUser = this.$resource("user/create");
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
