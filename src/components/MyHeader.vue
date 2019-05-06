<template>
    <div class="inner">
        <router-link to="/party"><h3 class="masthead-brand"><i class="fas fa-dice-d20"></i> GeekWatch</h3></router-link>
        <nav class="nav nav-masthead justify-content-center">
            <router-link to="/partyCreator" class="nav-link">Characters</router-link>
            <router-link to="/encounter" class="nav-link">Encounters</router-link>
            <router-link to="/tools" class="nav-link">Tools</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "MyHeader",
        data() {
            return{
                title:'NavBar'
            }
        }
    }
</script>

<style lang="less" scoped>

    @import "../assets/cover.css";
    @import "../assets/stylesheet";
</style>
