<template>
	<div>
		<h1 class="firepit__sujet mx-auto mt-3 fixed-top bg-dark col-10 rounded">
			{{ currentFirepit.sujet }}
		</h1>
		<b-container>
			<b-row>
				<p class="mx-auto mb-1 firepit__auteur">
					Allumé par {{ currentFirepit.utilisateur.prenom }}
					{{ currentFirepit.utilisateur.nom }}
				</p>
			</b-row>
			<b-row>
				<small class="mx-auto mt-0 text-muted">Le {{ currentFirepit.createdAt.substr(0, 10) }}</small>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FirepitService from "../services/FirepitService";
export default {
	name: "FirepitView",
	data() {
		return {
			currentFirepit: "",
		};
	},
	computed: {
		...mapState(["firepit"]),
	},
	methods: {
		...mapActions(["setFirepitId"]),
		firepitGetOneResponse(response) {
			this.currentFirepit = response;
		},
	},
	beforeMount() {
		this.$firepit = this.$resource("firepit{/id}");
		this.setFirepitId(this.$route.params.id);
	},
	mounted() {
		FirepitService.getOne(this, this.firepit.id);
	},
};
</script>

<style scoped lang="scss">
.subject-layout {
	background-color: #f00;
	height: 50px;
}

.firepit {
	&__sujet {
		transform: translateY(50px);
	}
	&__auteur {
		margin-top: 80px;
	}
}
</style>
