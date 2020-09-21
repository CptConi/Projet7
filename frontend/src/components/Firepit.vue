<template>
	<div>
		<div class="firepits">
			<div class="container">
				<div class="row">
					<!-- New Firepit -->
					<div class="card newFirepit col-md-3">
						<div class="card-title">
							Nouveau sujet
						</div>
						<div class="card-body">
							<img src="../assets/add_Firepit.png" alt="" class="card-img" />
						</div>
					</div>
					<!-- Existing Firepits -->
					<div class="card col-md-3" v-for="fp in reqResponse" :key="fp.firepit_id">
						<div class="card-body">
							<h5 class="card-title">
								{{ fp.sujet }}
							</h5>
							<p class="card-text">Créé par: {{ fp.utilisateurId }}</p>
							<p class="card-footer text-muted small">
								Allumé le: {{ fp.createdAt.substr(0, 10) }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
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
</style>
