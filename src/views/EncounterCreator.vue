<template>
    <div id="encounterCreator">
        <form @submit.prevent="validateBeforeSubmit">
            <div>
                    <input name="name" class="form-control-lg text-center m-2 p-2 w-50 mx-auto" v-model="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Encounter Name">
                    <i v-show="errors.has('name')" class="fa fa-warning"></i>
                    <p v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</p>
            </div>
            <div class="container d-flex mx-auto">
                <table id="myTable" class="table order-list">
                    <tr>
                        <td>
                            <label class="text-white" for="encounterDescription">Encounter Description</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-group">
                                <textarea class="form-control" id="encounterDescription" rows="3"></textarea>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label class="text-white" for="encounterNotes">Encounter Notes</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-group">
                                <textarea class="form-control" id="encounterNotes" rows="3"></textarea>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" style="text-align: center;">
                            <button type="submit" class="btn btn-lg mx-auto w-50 text-center">Create Encounter</button>
                        </td>
                    </tr>
                </table>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        name: "EncounterCreator",
        data: () => ({
            name: ''
        }),
        methods: {
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        // eslint-disable-next-line
                        this.$router.push('/tools');
                        return;
                    }
                    alert('Correct them errors!');
                });
            }
        }
    }
</script>

<style lang="less" scoped>

    @import "../assets/cover.css";
    @import "../assets/stylesheet";
</style>
