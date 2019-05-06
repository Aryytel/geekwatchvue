<template>
    <div id="tools">
        <h1 class="cover-heading">Build your journey here.</h1>
        <p class="lead">Select a tool and proceed to building your journey.</p>
        <div>
            <router-link to="/tracker" class="btn btn-lg w-50 btn m-2">Initiative Tracker</router-link>
        </div>
        <div>
            <router-link to="/mapper" class="btn btn-lg w-50 btn m-2">Map Maker</router-link>
        </div>
        <div>
            <router-link to="/mapperTracker" class="btn btn-lg w-50  btn m-2">Map & Tracker</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tools"
    }
</script>

<style lang="less" scoped>

    @import "../assets/cover.css";
    @import "../assets/stylesheet";
</style>
