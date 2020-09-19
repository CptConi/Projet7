<template>
	<div>
		<p>{{reqResponse}}</p>
	</div>
</template>

<script>
import userService from "../services/UserService";
export default {
	name: 'Firepit',
	data() {
		return {
			reqResponse:'',
		};
    },
    computed: {
        
    },

    mounted(){
		this.$user = this.$resource("user{/id}");
    }
};
</script>

<style></style>
