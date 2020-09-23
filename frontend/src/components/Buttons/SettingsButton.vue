<template>
	<div>
		<!-- SETTINGS -->
		<b-button variant="outline" v-b-toggle.settings-sidebar class="settings__btn"
			><b-icon-file-person class="settings__btn"></b-icon-file-person
		></b-button>
		<b-sidebar
			id="settings-sidebar"
			title="Votre Profil"
			shadow
			bg-variant="dark"
			text-variant="light"
			width="75%"
		>
			<div class="p-5"></div>
			<Settings></Settings>
		</b-sidebar>

		<!-- HOME -->
		
	</div>
</template>

<script>
import Settings from "../Settings";
export default {
	name: "SettingButton",
	components: { Settings },
};
</script>

<style lang="scss">
.settings {
	&__btn {
		position: fixed;
		left: 15px;
		top: 15px;
		width: 40px;
		height: 40px;
		color: white;
	}
}
</style>
