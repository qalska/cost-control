<template>
  <div class="costs-list">
    <h2>Costs List</h2>

    <div class="costs-list__wrapper mt-4">
        <div class="mr-2">
            <v-simple-table class="costs-list__table">
                <template v-slot:default>
                    <tbody>
                        <tr>
                            <td class="costs-list__category">Category</td>
                            <td class="costs-list__sum">123 RUB</td>
                            <td class="costs-list__text"> 
                                <div class="costs-list__text-wrapper">
                                    Text Text Text Text Text Text Text Text Text Text Text Text
                                    Text Text Text Text Text Text Text Text Text Text Text Text
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
} from '@mdi/js'

export default {
  data() {
    return {
      icons: {
        mdiPencil,
        mdiDelete,
      },
    }
  }
}
</script>

<style lang="scss" scoped>
    .costs-list{
        width: 60%;
        &__wrapper{
            overflow: auto;
            height: 80%;
        }
        &__category{
            width: 20%;
        }
        &__sum{
            width: 15%;
        }
        &__text{
            width: 50%;
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