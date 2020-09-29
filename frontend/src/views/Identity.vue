<template>
	<div>
		<b-container class="mt-4">
			<b-row>
				<b-col>
					<Settings :identityView="true"></Settings>
				</b-col>
			</b-row>
		</b-container>
	<FirepitAnimated></FirepitAnimated>
	</div>
</template>

<script>
import FirepitAnimated from "../components/Firepit-Animated"
import Settings from "../components/Settings";
export default {
	components: { Settings, FirepitAnimated },
};
</script>

<style></style>
