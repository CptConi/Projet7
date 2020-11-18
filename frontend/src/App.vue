<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            testZoneVisible: true,
        };
    },
    components: {},
    mounted() {
        this.$signup = this.$resource('user/signup');
        this.$login = this.$resource('user/login');
    },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #cdd0d3;

    margin: 0;
}

a {
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
}
</style>
