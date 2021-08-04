<template>
  <div class="costs-list">
    <div class="d-flex flex-row justify-center">
      <h2 class="mt-2 mb-2 costs-list__h3">Costs List</h2>

      <v-btn class="mt-1 ml-2" icon x-large @click="isShow = !isShow">
        <v-icon>{{ icons.mdiPlusThick }}</v-icon>
      </v-btn>
    </div>

    <div class="costs-list__wrapper mt-4">
        <div class="mr-2">
            <v-simple-table class="costs-list__table">
                <template v-slot:default>
                    <tbody>
                        <tr v-for="(cost, idx) in getAllCosts"
                        :key="idx">
                            <td class="costs-list__category"> {{ cost.category_title }} </td>
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
                                    <v-btn icon text class="costs-list__delete ml-2">
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
import {
    mdiPencil,
    mdiDelete,
    mdiPlusThick
} from '@mdi/js';

import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      icons: {
        mdiPencil,
        mdiDelete,
        mdiPlusThick
      },
    }
  },
  computed: mapGetters(['getAllCosts']),
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