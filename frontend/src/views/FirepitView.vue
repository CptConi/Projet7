<template>
	<div>
		<div class="sticky-top">
			<Navbar></Navbar>
			<b-container fluid class="sticky-top" id="top-panel">
				<b-row class="mb-2">
					<div class="mx-auto mt-3 bg-dark col-9 rounded">
						<h1 v-if="!loading">
							{{ currentFirepit.sujet }}
						</h1>
						<div v-else><b-skeleton> </b-skeleton><b-skeleton> </b-skeleton></div>
					</div>
				</b-row>
				<b-row id="firepit-infos" v-if="!loading">
					<p class="mx-auto mb-0">🔥 Allumé par {{ auteurFirepit }}</p>
					<p class="mx-auto mb-0">Allumé {{ formatedDate }}</p>
				</b-row>
				<b-row id="firepit-infos" v-else> </b-row>
			</b-container>
		</div>
		<b-container fluid>
			<b-row>
				<b-col id="message-panel" class="pt-2">
					<div v-if="messagesList.length > 0">
						<Message
							v-for="msg in messagesList"
							:key="msg.id"
							:content="msg.content"
							:auteur="msg.utilisateur"
							:date="msg.createdAt"
							:utilisateurId="msg.utilisateurId"
							:id="msg.id"
						></Message>
					</div>
					<div class="loaderSpinner" v-else>
						<div class="spinner-border" role="status">
							<span class="sr-only">Loading...</span>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>
		<MessageSender class="fixed-bottom shadow-lg z-index-mid" v-on:messageSent="scrollBottom"></MessageSender>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FirepitService from "../services/FirepitService";
import MessageService from "../services/MessageService";
import DateManager from "../services/DateManager";
import LS from "../services/StorageManager";
import Auth from "../services/Auth";

import Navbar from "../components/Navbar";
import MessageSender from "../components/MessageSender";
import Message from "../components/Message";
export default {
	name: "FirepitView",
	components: { MessageSender, Message, Navbar },
	data() {
		return {
			currentFirepit: "",
			messagesList: [],
			timer: "",
			loading: true,
			authTokenCheck: "",
		};
	},
	computed: {
		...mapState(["firepit", "user"]),
		auteurFirepit() {
			if (this.currentFirepit.utilisateur == null) {
				return "Utilisateur supprimé";
			} else {
				return this.currentFirepit.utilisateur.prenom + " " + this.currentFirepit.utilisateur.nom;
			}
		},
		formatedDate() {
			if (this.loading) {
				return 0;
			} else {
				return DateManager.formatDate(this.currentFirepit.createdAt);
			}
		},
	},
	watch: {
		authTokenCheck() {
			if (Auth.isTokenExpired(this.authTokenCheck)) {
				this.setErrorMessage("Veuillez vous connecter pour accéder à votre espace de discussion Firepit");
				this.$router.push({ name: "Authentification" });
			}
		},
	},
	methods: {
		...mapActions(["setFirepitId", "userInitFromParams", "setErrorMessage"]),

		getAllMessages() {
			MessageService.getMessagesByFirepit(this, this.firepit.id);
		},
		scrollBottom() {
			window.scrollTo(0, document.body.scrollHeight);
		},
	},
	//=============================================HOOKS========================================
	beforeMount() {
		this.setFirepitId(this.$route.params.id);
		//Mise à jour des infos contenues dans VueX via LocalStorage
		LS.initUser();
		this.userInitFromParams(LS.user);
	},
	mounted() {
		FirepitService.getOne(this, this.firepit.id);
		//loop de refresh des messages:
		this.timer = window.setInterval(() => {
			console.log("FirepitView Component currently refreshing messagesList");
			this.getAllMessages();
		}, 3000);
		this.$nextTick(() => {
			this.scrollBottom();
		});
	},
	beforeDestroy() {
		clearInterval(this.timer);
	},
};
</script>

<style scoped lang="scss">
#firepit-infos {
	background-color: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(5px);
	border-radius: 10px;
	margin: 0;
}

#message-panel {
	margin-bottom: 150px;
}

.loaderSpinner {
	transform: translateY(200px);
}

.z-index-mid{
	z-index: 1000;
}
</style>
