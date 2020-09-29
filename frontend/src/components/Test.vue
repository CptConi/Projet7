<template>
	<div class="Test__Component">
		<b-button id="showPanel" variant="outline" size="sm" @click="isVisible = !isVisible">
			<h4>
				<b-icon-tools></b-icon-tools>
			</h4>
		</b-button>
		<b-container fluid>
			<b-row class="bg-secondary text-dark" v-show="isVisible">
				<b-col sm="5">
					<h3>🔧Zone de test🔨</h3>
				</b-col>
				<b-col sm="6">
					<b-row>
						<b-button-group class="pt-1">
							<b-button variant="primary" size="sm" @click="createUsers">
								1 - Create users
							</b-button>
							<b-button variant="info" size="sm" @click="createFirepits">
								2 - Create firepits
							</b-button>
							<b-button variant="light" size="sm" @click="createMessages">
								3 - Create messages
							</b-button>
						</b-button-group>
					</b-row>
				</b-col>
			</b-row>
			<b-container>
				<b-row>
					<b-alert v-show="warningMessage && isVisible" show variant="warning" class="mx-auto">{{ warningMessage }}</b-alert>
				</b-row>
			</b-container>
		</b-container>
	</div>
</template>

<script>
import UserService from "../services/UserService";
import FirepitService from "../services/FirepitService";
import MessageService from "../services/MessageService";
import { mapState, mapActions } from "vuex";

export default {
	name: "Test",
	data() {
		return {
			isVisible: true,
			email: "",
			password: "",
			prenom: "",
			nom: "",
			poste: "",
			userTest: { id: "", email: "" },
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
					sujet: "Quelqu'un aurait-il vu mon flacon de potion ?",
					portee: "Tout le monde",
					id: 6,
				},
				{
					sujet: "Avada Kedavra !",
					portee: "Tout le monde",
					id: 2,
				},
				{
					sujet: "A tous les eleves ...",
					portee: "Tout le monde",
					id: 1,
				},
			],
			messagesList: [
				{ content: "Salut, j'arrive tout juste et j'aime déjà beaucoup le principe de cet endroit !", firepitId: 1, userId: "1" },
				{ content: "Hey ! En plus on peut même s'envoyer des URL, regarde ça ! http://example.com/", firepitId: 1, userId: "2" },
				{
					content:
						"Sérieux ? Attends, j'essaye avec une image ! https://www.traveldoo.com/wp-content/uploads/2019/09/thumbs-up-2056022_1920-300x188.jpg",
					firepitId: 1,
					userId: "1",
				},
				{ content: "Salut, c'est ici pour échanger avec les autres élèves ?", firepitId: 2, userId: "3" },
				{ content: "Hola ! 🥖🧙‍♂️✨", firepitId: 2, userId: "4" },
				{ content: "cc sava", firepitId: 2, userId: "5" },
				{ content: "First !", firepitId: 3, userId: "4" },
			],
		};
	},
	computed: {
		...mapState(["user", "warningMessage"]),
	},
	methods: {
		...mapActions(["setWarningMessage", "unsetWarningMessage"]),
		createFirepits() {
			this.setWarningMessage("Méthode createFirepits lancée");
			//TEST:
			for (let firepit of this.firepitList) {
				this.sujet = firepit.sujet;
				this.portee = firepit.portee;
				this.userTest.id = firepit.id;
				FirepitService.createTestFirepit(this);
			}
		},
		createMessages() {
			this.setWarningMessage("Méthode createMessages lancée");
			for (let msg of this.messagesList) {
				MessageService.createMessageFromParams(this, msg.content, msg.firepitId, msg.userId);
			}
		},
		createUsers() {
			this.setWarningMessage("Méthode createUsers lancée");
			for (let user of this.userList) {
				console.log("Création du compte: " + user.prenom + " " + user.nom);
				this.email = user.email;
				this.password = user.password;
				this.prenom = user.prenom;
				this.nom = user.nom;
				this.poste = user.poste;
				UserService.createTestUser(this);
			}
		},
		goToAuth() {
			this.$router.push({ name: "Authentification" });
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
.home-button {
	width: 18px;
	height: 18px;
	color: white;
}

#showPanel {
	position: fixed;
	top: 95px;
	left: 10px;
	color: white;
	z-index: 1000000000;
}
</style>
