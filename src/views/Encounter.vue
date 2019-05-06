<template>
    <div id="encounter">
        <h1 class="cover-heading">Choose your journey here.</h1>
        <p class="lead">Create or select an encounter and proceed to tools.</p>
            <div>
                <router-link to="/encounterCreator" class="btn btn-lg w-50 m-2">Create Encounter</router-link>
            </div>
            <div class="btn-group-vertical w-50" role="group" aria-label="Button group with nested dropdown">
                <a class="btn btn-lg dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select Encounter
                </a>
                <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
                    <tr v-for="(encounter, index) in encounters" :key="index">
                        <td class="dropdown-item"><router-link to="/tools" class="dropdown-item" v-model="encounter.name">{{encounter.name}}</router-link></td>
                    </tr>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "Encounter",
        data() {
            return {
                encounters: [
                    {name: 'Encounter 1'},
                    {name: 'Encounter 2'},
                    {name: 'Encounter 5'}
                ]
            }
        }
    }
</script>

<style lang="less" scoped>

    @import "../assets/cover.css";
    @import "../assets/stylesheet";
</style>
