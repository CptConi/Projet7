<template>
	<div>
		<b-container fluid class="fixed-top" id="top-panel">
			<b-row>
				<h1 class="mx-auto mt-3 bg-dark col-10 rounded">
					<!-- {{ currentFirepit.sujet }} -->
				</h1>
			</b-row>
			<b-row>
				<p class="mx-auto mb-1 firepit__auteur">
					<!-- Allumé par {{ currentFirepit.utilisateur.prenom }}
					{{ currentFirepit.utilisateur.nom }} -->
				</p>
			</b-row>
			<b-row>
				<small class="mx-auto mt-0 text-muted">
					<!-- Le {{ currentFirepit.createdAt.substr(0, 10) }} -->
				</small>
			</b-row>
		</b-container>
		<b-container> </b-container>
		<b-container fluid>
			<b-row>
				<b-col id="message-panel" class=""></b-col>
			</b-row>
			<b-button size="lg" variant="warning" id=message-button @click.stop="getAllMessages">Récupération des messages</b-button>
		</b-container>
		<MessageSender class="fixed-bottom"></MessageSender>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FirepitService from "../services/FirepitService";
import MessageSender from "../components/MessageSender";
import MessageService from '../services/MessageService';
export default {
	name: "FirepitView",
	components: { MessageSender },
	data() {
		return {
			currentFirepit: "",
			messagesList: [],
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
		getAllMessages(){
			MessageService.getMessagesByFirepit(this, this.firepit.id)
		}
	},
	beforeMount() {
		this.setFirepitId(this.$route.params.id);
	},
	mounted() {
		this.$firepit = this.$resource("firepit{/id}");
		this.$message = this.$resource("message{/id}");
		FirepitService.getOne(this, this.firepit.id);
	},
};
</script>

<style scoped lang="scss">
#top-panel {
	transform: translateY(50px);
}

#message-panel {
	height: 100vh;
}

#message-button{
	transform: translateY(-500px);
}
</style>
