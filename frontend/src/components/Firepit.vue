<template>
	<div>
		<p>{{reqResponse[1]}}</p>
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
        displayUser(){
            let tempTab = [];
            for(let prop in this.reqResponse){
                tempTab.push(this.reqResponse[prop])
            }
            return tempTab;
        },
        longeur(){
            return this.displayUser.lenght;
        }
    },

    mounted(){
        console.log(this.displayUser);
		this.$user = this.$resource("user{/id}");
        userService.getAll(this);
    }
};
</script>

<style></style>
