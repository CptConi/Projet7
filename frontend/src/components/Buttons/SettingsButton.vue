<template>
	<div>
		<!-- SETTINGS -->
		<b-button variant="outline" v-b-toggle.settings-sidebar class="text-white settings__btn"
			><b-icon-file-person class="settings__btn"></b-icon-file-person
		>Profil</b-button>
		<b-sidebar
			id="settings-sidebar"
			title="Votre Profil"
			shadow
			bg-variant="dark"
			text-variant="light"
			width="75%"
		>
			<div class="p-5"></div>
			<Settings class="z-index-top"></Settings>
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
		color: white;
		outline: none;

	}
}

.z-index-top{
	z-index: 100000000000;
}
</style>
