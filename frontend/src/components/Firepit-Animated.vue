<template>
    <img src="../assets/firepitAnimated.gif" alt="Animated firepit GIF">
</template>

<script>
export default {
    name: 'FirepitAnimated'
}
</script>

<style lang="scss">
    img{
        width:30vh;
        position:absolute;
        bottom:2em;
        left:50%;
        transform: translateX(-50%);
        z-index: -1;
        opacity: 0.5;
    }
</style>