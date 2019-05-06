<template>
    <div id="party">
        <h1 class="cover-heading">Start your journey here.</h1>
        <p class="lead">Create or select a party and proceed to encounters.</p>
        <router-link to="/partyCreator" class="btn btn-lg btn w-50 m-2">Create Party</router-link>
        <div class="btn-group-vertical w-50" role="group" aria-label="Button group with nested dropdown">
            <a class="btn btn-lg btn-primary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select Party</a>
            <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
                <tr v-for="(party, index) in partys" :key="index">
                    <td class="dropdown-item">
                        <router-link to="/encounter" class="dropdown-item">{{party.name}}</router-link>
                    </td>
                </tr>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Party",
        data() {
            return {
                partys: [
                    {name: 'Party 1'},
                    {name: 'Party 2'},
                    {name: 'Party 3'}
                ]
            }
        }
    }
</script>

<style lang="less" scoped>

    @import "../assets/cover.css";
    @import "../assets/stylesheet";
</style>

