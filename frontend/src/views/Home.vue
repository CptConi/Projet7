<template>
	<div>
		<!-- SETTINGS -->
		<div class="settings__panel">
			<transition name="slide">
			</transition>
		</div>
		<b-button variant="outline" v-b-toggle.settings-sidebar class="settings__btn"><b-icon-file-person class="settings__btn"></b-icon-file-person></b-button>
		<b-sidebar id="settings-sidebar" title="Votre Profil" shadow bg-variant="dark" text-variant="light" width=75%>
			<div class="p-5"></div>	
				<Settings></Settings>
		</b-sidebar>
		<!-- FIREPITS // POSTS -->
		<Firepit></Firepit>
	</div>
</template>

<script>
import Settings from "../components/Settings";
import Firepit from "../components/Firepit";
import { mapState } from "vuex";

export default {
	data() {
		return {
			settingsOpen: false,
		};
	},
	components: { Settings, Firepit },
	computed: {
		...mapState(["user"]),
	},
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
		color:white;
	}
	
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease-in;
}
.slide-enter,
.slide-leave-to {
	transform: translateX(-100%);
}
</style>
