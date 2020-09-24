<template>
	<div>
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
				<p class="mx-auto mb-0">Le {{ currentFirepit.createdAt.substr(0, 10) }}</p>
			</b-row>
			<b-row id="firepit-infos" v-else> </b-row>
		</b-container>
		<b-container fluid>
			<b-row>
				<b-col id="message-panel" class="pt-2">
					<div>
						<Message
							v-for="msg in messagesList"
							:key="msg.id"
							:content="msg.content"
							:prenom="msg.utilisateur.prenom"
							:nom="msg.utilisateur.nom"
							:utilisateurId="msg.utilisateurId"
						></Message>
					</div>
				</b-col>
			</b-row>
		</b-container>
		<MessageSender class="fixed-bottom shadow-lg" v-on:messageSent="scrollBottom"></MessageSender>
		<SettingsButton></SettingsButton>
		<goToHomeButton></goToHomeButton>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FirepitService from "../services/FirepitService";
import MessageService from "../services/MessageService";

import goToHomeButton from "../components/Buttons/GoToHomeButton";
import SettingsButton from "../components/Buttons/SettingsButton";
import MessageSender from "../components/MessageSender";
import Message from "../components/Message";
export default {
	name: "FirepitView",
	components: { MessageSender, Message, SettingsButton, goToHomeButton },
	data() {
		return {
			currentFirepit: "",
			messagesList: [],
			timer: "",
			loading: true,
		};
	},
	computed: {
		...mapState(["firepit", "user"]),
		auteurFirepit() {
			if (this.currentFirepit.utilisateur == null) {
				return "Utilisateur non trouvé";
			} else {
				return this.currentFirepit.utilisateur.prenom + " " + this.currentFirepit.utilisateur.nom;
			}
		},
	},
	methods: {
		...mapActions(["setFirepitId"]),

		getAllMessages() {
			MessageService.getMessagesByFirepit(this, this.firepit.id);
		},
		scrollBottom() {
			window.scrollTo(0, document.body.scrollHeight);
		},
	},
	beforeMount() {
		this.setFirepitId(this.$route.params.id);
	},
	mounted() {
		this.$firepit = this.$resource("firepit{/id}");
		this.$message = this.$resource("message");
		this.$messageFromFirepit = this.$resource("message/fromfirepit{/id}");
		FirepitService.getOne(this, this.firepit.id);
		//loop de refresh des messages:
		this.timer = window.setInterval(() => {
			console.log("FirepitView Component currently refreshing messagesList");
			this.getAllMessages();
		}, 1000);

		this.scrollBottom();
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
	// height: 100vh;
	margin-bottom: 150px;
}
</style>
