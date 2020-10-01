<template>
	<div>
		<b-container class="mt-4">
			<b-row>
				<b-col>
					<Settings :identityView="true"></Settings>
				</b-col>
			</b-row>
		</b-container>
		<FirepitAnimated></FirepitAnimated>
	</div>
</template>

<script>
import FirepitAnimated from "../components/Firepit-Animated";
import Settings from "../components/Settings";
import { mapState, mapActions } from "vuex";

export default {
	components: { Settings, FirepitAnimated },
	computed: {
		...mapState(["isAuth"]),
	},
	methods: {
		...mapActions(["setErrorMessage"])
	},
	beforeMount() {
		if (!this.isAuth) {
			this.setErrorMessage("Vous ne pouvez pas accéder à la page de profil sans être authentifié");
			this.$router.push({ name: "Authentification" });
		} 
	},
};
</script>

<style></style>
