<template>
	<div>
		<b-container fluid>
			<b-navbar toggleable="md" type="dark" variant="dark" class="highZ-index">
				<b-navbar-brand id="branding" :to="{ name: 'Home' }">🔥Firepit</b-navbar-brand>
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
				<b-collapse id="nav-collapse" is-nav>
						<small class="ml-auto">Connecté en tant que: {{ user.email }}</small>
					<b-navbar-nav class="ml-auto">
						<SettingsBtn></SettingsBtn>
						<HomeBtn></HomeBtn>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</b-container>
	</div>
</template>

<script>
import {mapState} from "vuex";
import SettingsBtn from "../components/Buttons/SettingsButton";
import HomeBtn from "../components/Buttons/GoToHomeButton";
export default {
	name: "Navbar",
	components: { SettingsBtn, HomeBtn },
	computed: {
		...mapState(["user"]),
	},
};
</script>

<style lang="scss">
#branding {
	font-family: "Kaushan script";
	letter-spacing: 2px;
}

.highZ-index{
	z-index: 2000;
}
</style>
