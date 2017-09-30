<template>
    <div id="appMain">
        <appHeader></appHeader>
        <router-view></router-view>
    </div>
</template>

<script>
    import AppHeader from './components/AppHeader'
    export default {
        name: 'app-main',
        components: {
            AppHeader
        }
    }
</script>

<style>

</style>
