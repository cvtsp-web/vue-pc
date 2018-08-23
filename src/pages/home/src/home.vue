<template>
    <div class="home">
        hello home
    </div>
</template>

<script>
    /**
     * @author: undefined
     * @created: Tue Aug 21 2018 17:12:08 GMT+0800 (CST)
     */

    export default {
        name: 'home',
        mounted() {
            this.$store.dispatch('home');
        }
    }
</script>

<style>
    .home {
        font-size: 20px;
    }
</style>


