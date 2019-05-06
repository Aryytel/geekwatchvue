<template>
    <div id="partyCreator">
        <form @submit.prevent="validateBeforeSubmit">
            <div>
                <input name="name" class="form-control-lg text-center m-2 p-2 w-50 mx-auto" v-model="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Party Name">
                <i v-show="errors.has('name')" class="fa fa-warning"></i>
                <p v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</p>
            </div>
            <div class="container d-flex mx-auto">
                <table id="myTable" class="table order-list">
                    <thead>
                        <tr>
                            <td class="col-sm text-white">Name</td>
                            <td class="col-sm text-white">Initiative</td>
                            <td class="col-sm text-white">Speed</td>
                            <td class="col-sm"></td>
                        </tr>
                    </thead>
                    <tbody v-sortable.tr="rows">

                        <tr v-for="(row, index) in rows" :key="index">
                            <td class="col-sm">
                                <input type="text" name="name" class="form-control" v-model="row.name"/>
                            </td>
                            <td class="col-sm">
                                <input type="text" name="initiative"  class="form-control" v-model="row.initiative" number/>
                            </td>
                            <td class="col-sm">
                                <input type="text" name="speed"  class="form-control" v-model="row.speed" number/>
                            </td>
                            <td class="col-sm">
                                <!--                            <a class="deleteRow"></a>-->
                                <button class="btn btn-primary" @click="removeRow($index)">Delete Row</button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colspan="4" style="text-align: center;">
                            <button class="btn btn-lg mx-auto w-50 text-center" @click="addRow($index)">Add Row</button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" style="text-align: center;">
                            <button type="submit" class="btn btn-lg mx-auto w-50 text-center">Create Party</button>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "PartyCreator",
        data() { return{
            rows: [{}]
        }
        },
        methods: {
            addRow: function (index) {
                try {
                    this.rows.splice(index + 1, 0, {});
                    // eslint-disable-next-line no-console
                } catch (e) { console.log(e)
                }
            },
            removeRow: function (index) {
                this.rows.splice(index, 1);
            },
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        // eslint-disable-next-line
                        this.$router.push('/encounterCreator');
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
