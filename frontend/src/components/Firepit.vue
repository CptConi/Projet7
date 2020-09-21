<template>
	<div>
		<div class="firepits">
			<div class="row">
				<div class="card newFirepit col-3">
					<h2>
						Nouveau sujet
					</h2>
				</div>
				<div class="card col-3" v-for="fp in reqResponse" :key="fp.firepit_id">
					<h3 class="card-title">{{ fp.sujet }}</h3>
					<p class="card-text">Créé par: {{ fp.utilisateurId }}</p>
					<p class="card-text text-muted">Allumé le: {{ fp.createdAt.substr(0, 10) }}</p>
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
	display: flex;
}
.newFirepit {
	background: url("../assets/add_Firepit.png") no-repeat;
	background-size: 30%;
	background-position: center;
}
.card{
	margin-bottom: 1em;
}
</style>
