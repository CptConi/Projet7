<template>
	<div class="Test__Component">
		<b-container fluid>
			<b-row class="bg-dark">
				<b-col sm='5'>
					<h3>Zone de test</h3>
				</b-col>
				<b-col>
					<b-row>
						<b-button-group class="pt-1">
							<b-button variant="outline-light" size="sm" @click="createUsers">
								1 - Create users
							</b-button>
							<b-button variant="outline-secondary" size="sm" @click="createFirepits">
								2 - Create firepits
							</b-button>
							<b-button variant="outline-secondary" size="sm" @click="createMessages">
								3 - Create messages
							</b-button>
						</b-button-group>
					</b-row>
				</b-col>
			</b-row>
		</b-container>
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
				{
					sujet: "Avada Kedavra !",
					portee: "Tout le monde",
					id: 2,
				},
				{
					sujet: "Monsieur Potter ...",
					portee: "Tout le monde",
					id: 1,
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
				FirepitService.createTestFirepit(this);
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

<style scoped lang="scss"></style>
