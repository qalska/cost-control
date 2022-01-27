<template>
    <div class="costs__create mr-3">

        <v-form v-show="isShow">
            <v-select
                v-model="cost.category"
                :items="allCategories"
                item-text="title"
                item-value="id"
                label="Category"
                persistent-hint
                return-object>
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
                    type="submit"
                    @click.prevent="addCost()">
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
import { mapActions, mapGetters } from 'vuex';

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
                id: null,
                category: null,
                sum: null,
                text: ''
            }
        }
    },
    computed: mapGetters([ 'allCategories', 'lastCostId']),
    methods: {
        ...mapActions(['postCost', 'updateCategoryTotal']),
        addCost() {
            let newCost = {
                ...this.cost,
                id: this.lastCostId,
                category: this.cost.category.id,
                sum: this.cost.sum,
                text: this.cost.text,
            }

            this.postCost(newCost);
            this.updateCategoryTotal({
                sum: this.cost.sum,
                category: this.cost.category
            });

            this.cost.id = null;
            this.cost.category = null;
            this.cost.sum = null;
            this.cost.text = '';
        },
    }


}
</script>

<style>

</style>