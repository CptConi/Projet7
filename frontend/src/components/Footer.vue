<template>
    <b-container class="fixed-bottom " id="GroupomaniaFooter">
        <b-row>
            <b-col>
                <p class="grey my-0">Tout droits réservés &copy; Nicolas RENARD, {{ date }}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'Footer',
    computed: {
        date() {
            let now = new Date();
            return now.getFullYear();
        },
    },
};
</script>

<style lang="scss">
.grey {
    color: #908f99;
    font-weight: bold;
}

#GroupomaniaFooter {
    background-color: #222034;
    z-index: 1000;
}

#Groupomania-logo {
    width: 20vh;
    opacity: 0.5;
}
</style>
