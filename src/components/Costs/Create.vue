<template>
    <div class="costs__create mr-3">

        <v-form v-show="isShow">
            <v-select
                v-model="cost.categoryTitle"
                :items="getAllCategoriesTitle"
                label="Category"
                required>
            </v-select>

            <v-text-field
                v-model="cost.sum"
                label="Sum"
                required>
            </v-text-field>

            <v-text-field
                v-model="cost.text"
                label="Text"
                required>
            </v-text-field>

            <div class="mb-4 d-flex justify-end">
                <v-btn
                    color="success"
                    @click="addCost()">
                    Add
                </v-btn>

                <v-btn
                    color="error"
                    class="ml-4"
                    @click="changeIsShow()">
                    Close
                </v-btn>
            </div>
        </v-form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        isShow: {
            type: Boolean,
            require: true,
            default: false
        }
    },
    data() {
        return {
            cost: {
                categoryTitle: '',
                sum: null,
                text: ''
            }
        }
    },
    computed: mapGetters([ 'getAllCategoriesTitle' ]),
    methods: {
        async addCost() {
            let newCost = {
                ...this.cost,
                categoryTitle: this.cost.categoryTitle,
                sum: this.cost.sum,
                text: this.cost.text,
            }

            fetch('http://localhost:3000/costs', {
                method: 'POST',
                body: JSON.stringify(newCost),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then( response => {
                console.log( response.json() );
            })

            this.cost.categoryTitle = '';
            this.cost.sum = '';
            this.cost.text = '';
        }
    }


}
</script>

<style>

</style>