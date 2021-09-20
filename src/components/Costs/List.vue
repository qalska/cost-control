<template>
  <div class="costs-list">
    <div class="d-flex flex-row justify-center">
      <h2 class="mt-2 mb-2 costs-list__h3">Costs List</h2>

      <v-btn class="mt-1 ml-2" icon x-large @click="isShow = !isShow">
        <v-icon>{{ icons.mdiPlusThick }}</v-icon>
      </v-btn>
    </div>

    <create 
    :isShow="isShow" />

    <div class="costs-list__wrapper mt-4">
        <div class="mr-2">
            <v-simple-table class="costs-list__table">
                <template v-slot:default>
                    <tbody>
                        <tr v-for="cost in getAllCosts"
                        :key="cost.id">
                            <td class="costs-list__category"> {{ getCategoryTitleById(cost.category) }} </td>
                            <td class="costs-list__sum"> {{ cost.sum }} € </td>
                            <td class="costs-list__text"> 
                                <div class="costs-list__text-wrapper">
                                    {{ cost.text }}
                                </div>
                            </td>
                            <td class="costs-list__actions">
                                <div>
                                    <v-btn icon text class="costs-list__edit" >
                                        <v-icon>{{ icons.mdiPencil }}</v-icon>
                                    </v-btn>
                                    <v-btn icon text class="costs-list__delete ml-2"
                                    @click="removeCost(cost.id, cost.sum, cost.category)">
                                        <v-icon>{{ icons.mdiDelete }}</v-icon>
                                    </v-btn>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
    </div>
  </div>
</template>

<script>
import Create from '../Costs/Create.vue';

import {
    mdiDelete,
    mdiPlusThick
} from '@mdi/js';

import { mapGetters, mapActions } from 'vuex';

export default {
  components: { Create },
  data() {
    return {
      icons: {
        mdiDelete,
        mdiPlusThick
      },
      isShow: false,
    }
  },
  computed: mapGetters(['getAllCosts', 'getAllCategories']),
  methods: {
    ...mapActions(['deleteCost', 'updateCategoryTotal']),
    removeCost(id, sum, category) {
        this.deleteCost(id);
        this.updateCategoryTotal({
            sum: -sum,
            category: getCategoryById(category)
        });
    },
    getCategoryTitleById(id) {
        return this.getAllCategories.find(item => item.id === id).title;
    },
  }
}
</script>

<style lang="scss" scoped>
    .costs-list{
        width: 60%;
        &__h3{
            font-size: 30px;
            color: #757575;
        }
        &__wrapper{
            overflow: auto;
            height: 80%;
        }
        &__category{
            width: 15%;
        }
        &__sum{
            width: 15%;
        }
        &__text{
            width: 55%;
            &-wrapper {
                width: 100%;
                word-break: break-all;
            }
        }
        &__actions{
            width: 15%;
        }
    }
</style>