<template>
	<b-container class="fixed-bottom " id="GroupomaniaFooter">
		<b-row>
			<b-col>
				<img src="../assets/icon-left-font-monochrome-white.svg" alt="Logo de l'entreprise Groupomania" id="Groupomania-logo"/>
				<p class="grey my-0">&copy; {{ date }}</p>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: "Footer",
	computed: {
		date() {
			let now = new Date();
			return now.getFullYear();
		},
	},
};
</script>

<style lang='scss'>
.grey{
    color: #908f99;
    font-weight: bold;
}

#GroupomaniaFooter{
	background-color: #222034;
	z-index: 1000;
}

#Groupomania-logo{
	width: 20vh;
	opacity: 0.5;
}
</style>
