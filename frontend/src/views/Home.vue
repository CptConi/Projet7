<template>
	<div>
		<!-- SETTINGS -->
		<div class="settings__panel">
			<transition name="slide">
				<Settings v-show="settingsOpen" v-on:close-settings="settingsOpen = false"></Settings>
			</transition>
		</div>
		<button class="settings__btn" @click.stop="settingsOpen = !settingsOpen"></button>
		<!-- FIREPITS // POSTS -->
		<Firepit></Firepit>
	</div>
</template>

<script>
import Settings from "../components/Settings";
import Firepit from "../components/Firepit"
import { mapState } from "vuex";

export default {
	data() {
		return {
			settingsOpen: true,
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
    &__btn{
        position: fixed;
        left: 10px;
        top: 10px;
        background: url('../assets/settings_btn.png') no-repeat;
        width: 50px;
        height: 50px;
        background-size: 100%;

        border: none;
        outline: none;
        cursor: pointer;

        transition: all 0.2s;

        &:hover{
            transform: scale(1.1);
        }
    }
	&__panel {
		position: fixed;
        top: 60px;
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
