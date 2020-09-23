<template>
	<div>
		<b-container fluid>
			<b-row>
				<b-col>
					<b-input-group size="" class="mb-2">
						<b-form-textarea
							v-model="message"
							autofocus
							no-resize
							@keyup.enter="sendMessage"
						></b-form-textarea>
						<b-input-group-append>
							<b-button @click.prevent.stop="sendMessage" variant="success"
								>Envoyer</b-button
							>
						</b-input-group-append>
					</b-input-group>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import MessageService from "../services/MessageService";
import { mapState } from "vuex";
export default {
	name: "MessageSender",
	data() {
		return {
			message: "",
			
		};
	},
	computed: {
		...mapState(["user", "firepit"]),
	},
	methods: {
		sendMessage() {
			MessageService.createMessage(this);
			this.message = "";
		},
	},
	mounted() {
		this.$message = this.$resource("message{/id}");
	},
};
</script>

<style></style>
