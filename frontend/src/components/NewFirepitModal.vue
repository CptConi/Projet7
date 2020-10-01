<template>
	<div>
		<b-container>
			<b-modal
				centered
				ref="modal"
				size="xl"
				id="modalNewFirepit"
				title="Allumez le feu !"
				no-close-on-esc
				no-close-on-backdrop
				cancel-variant="outline-danger"
				ok-variant="success"
				header-bg-variant="dark"
				header-text-variant="light"
				body-bg-variant="dark"
				body-text-variant="light"
				footer-bg-variant="dark"
				footer-text-variant="light"
				@ok="sendFirepit"
			>
				<b-alert show variant="warning" dismissible class="text-muted">
					<small>
						Avant d'allumer votre Firepit, merci de mesurer vos propos. Nous vous
						rappelons que Firepit est un outil de communication au sein de l'entreprise
						Groupomania. Une équipe de modérateur de réserve le droit de supprimer votre
						Firepit s'il estime qu'il va à l'encontre de la charte.
					</small>
				</b-alert>

				<b-form class="mt-4">
					<b-form-group label="Votre Firepit :" label-for="sujet">
						<b-form-input
							id="sujet"
							v-model="form.sujet"
							type="text"
							required
							placeholder="Sujet du Firepit"
						></b-form-input>
					</b-form-group>
					<b-form-group>
						<b-form-textarea
							id="sujet"
							v-model="form.firstMessage"
							placeholder="Votre premier message, celui allume le feu !"
						></b-form-textarea>
					</b-form-group>
				</b-form>
			</b-modal>
		</b-container>
	</div>
</template>

<script>
import { mapState } from "vuex";
import FirepitService from "../services/FirepitService";
import MessageService from "../services/MessageService";

export default {
	name: "NewFirepitModal",
	data() {
		return {
			form: { sujet: "", firstMessage: "" },
		};
	},
	computed: {
		...mapState(["user"]),
	},
	methods: {
		// Méthode appelée lors de la validation du firepit
		sendFirepit() {
			FirepitService.createFirepit(this);
		},
		// Callback appelée lorsque le firepit est créé.
		firepitCreated(firepitId) {
			MessageService.createMessageFromParams(
				this,
				this.form.firstMessage,
				firepitId,
				this.user.id
			);
			// Une fois le firepit créé, on peut naviguer vers la page de ce firepit.
			this.$router.push({ name: "Firepitview", params: { id: firepitId } });
		},
	},
};
</script>

<style></style>
