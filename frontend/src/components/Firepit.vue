<template>
	<div class="firepits">
		<b-container>
			<!-- New Firepit -->
			<b-row class="justify-content-center mb-4">
				<b-card title="Nouveau Sujet">
					<b-button variant="outline" class="btn-circle">
						<b-icon-plus-circle class="addFirepit"></b-icon-plus-circle>
					</b-button>
				</b-card>
			</b-row>

			<!-- Existing Firepits -->
			<b-row>
				<b-card-group deck class="justify-content-center">
					<div v-for="fp in reqResponse" :key="fp.firepit_id">
						<b-card class="mb-4">
							<b-card-title class="h2">{{ fp.sujet }}</b-card-title>
							<b-card-text>
								<p>Créé par: {{ fp.utilisateurId }}</p>
							</b-card-text>
							<b-button variant="outline-success" class="mb-3">
								S'assoir autour du feu <b-icon-chat-left-dots-fill class="ml-2"></b-icon-chat-left-dots-fill>
							</b-button>
							<b-card-text class="small text-muted pb-0"
								>Allumé le: {{ fp.createdAt.substr(0, 10) }}</b-card-text
							>
						</b-card>
					</div>
				</b-card-group>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import FirepitService from "../services/FirepitService";

export default {
	name: "Firepit",
	data() {
		return {
			reqResponse: "",
		};
	},
	computed: {},

	mounted() {
		this.$user = this.$resource("user{/id}");
		this.$firepit = this.$resource("firepit{/id}");

		FirepitService.getAll(this);
	},
};
</script>

<style lang="scss">
.firepits {
	margin-top: 5em;
}

.addFirepit {
	width: 90px;
	height: 90px;
	color: white;
}
</style>
