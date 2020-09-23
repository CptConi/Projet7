<template>
	<div>
		<b-container fluid class="sticky-top" id="top-panel">
			<b-row>
				<h1 class="mx-auto mt-3 bg-dark col-10 rounded">
					{{ currentFirepit.sujet }}
				</h1>
			</b-row>
			<b-row id="firepit-infos">
				<p class="mx-auto mb-0">
					🔥 Allumé par {{ currentFirepit.utilisateur.prenom }}
					{{ currentFirepit.utilisateur.nom }}
				</p>
				<p class="mx-auto mb-0">
					Le {{ currentFirepit.createdAt.substr(0, 10) }}
				</p>
			</b-row>
		</b-container>
		<b-container> </b-container>
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
		<MessageSender class="fixed-bottom"></MessageSender>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FirepitService from "../services/FirepitService";
import MessageService from "../services/MessageService";
import MessageSender from "../components/MessageSender";
import Message from "../components/Message";
export default {
	name: "FirepitView",
	components: { MessageSender, Message },
	data() {
		return {
			currentFirepit: "",
			messagesList: [],
			timer: "",
		};
	},
	computed: {
		...mapState(["firepit", "user"]),
	},
	methods: {
		...mapActions(["setFirepitId"]),
		firepitGetOneResponse(response) {
			this.currentFirepit = response;
		},
		getAllMessages() {
			MessageService.getMessagesByFirepit(this, this.firepit.id);
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

		//loop de récupération des messages:
		this.timer = window.setInterval(() => {
			console.log("FirepitView Component currently refreshing messagesList");
			this.getAllMessages();
		}, 1000);
	},
	beforeDestroy() {
		clearInterval(this.timer);
	},
};
</script>

<style scoped lang="scss">
#firepit-infos{
	background-color: rgba(255,255,255,0.2);
	border-radius: 10px;
	margin:0;
	padding-bottom:-50px;
}

#message-panel {
	height: 100vh;
	margin-bottom: 150px;
}

</style>
