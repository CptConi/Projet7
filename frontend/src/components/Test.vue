<template>
	<div class="Test__Component">
		<h1>Zone de test</h1>
		<div>
			<button class="btn" @click="createFirepits">Create firepits</button>
			<button class="btn" @click="createMessages">Create messages</button>
			<button class="btn" @click="createUsers">Create users</button>
			<button class="btn" @click="createAll">Create All</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Test",
	data() {
		return {};
	},
	methods: {
		createFirepits() {
			console.log("Méthode createFirepits pas encore implémentée, Work in progress");
		},
		createMessages() {
			console.log("Méthode createMessages pas encore implémentée, Work in progress");
		},
		createUsers() {
			console.log("Méthode createUsers pas encore implémentée, Work in progress");
		},
		createAll() {
			console.log("Méthode createAll pas encore implémentée, Work in progress");
		},
	},
	mounted() {
		this.$firepit = this.$resource("firepit{/id}");
		this.$message = this.$resource("message{/id}");
		this.$user = this.$resource("user{/id}");
	},
};
</script>

<style scoped lang="scss">
.Test__Component {
	display: flex;
	flex-direction: column;
}
.btn {
    cursor: pointer;
	margin-left: 1em;
	margin-right: 1em;
}
</style>
