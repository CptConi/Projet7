<template>
	<div>
		<b-container fluid>
			<b-navbar toggleable="md" type="dark" variant="dark">
				<b-navbar-brand id="branding" href="#">🔥Firepit</b-navbar-brand>
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
				<b-collapse id="nav-collapse" is-nav>
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
import SettingsBtn from "../components/Buttons/SettingsButton";
import HomeBtn from "../components/Buttons/GoToHomeButton";
export default {
	name: "Navbar",
	components: { SettingsBtn, HomeBtn },
};
</script>

<style lang="scss">
#branding {
	font-family: "Kaushan script";
	letter-spacing: 2px;
}
</style>
