<template>
  <ul class="notes__list pl-0">
    <li class="pl-3 pb-2 pt-1 mb-3"
      v-for="note of notes"
      :key="note.id">
      <div class="d-flex justify-space-between">
          <div class="text-overline mb-4">
            {{ note.date }}
          </div>

          <div>
            <v-btn icon text class="costs-list__edit" >
              <v-icon>{{ icons.mdiPencil }}</v-icon>
            </v-btn>
            <v-btn icon text class="costs-list__delete ml-2">
              <v-icon>{{ icons.mdiDelete }}</v-icon>
            </v-btn>
          </div>
      </div>
      <p class="text-h5 mb-2">
        {{ note.category }}
      </p>
      <p>
        {{ note.text }}
      </p>

    </li>
  </ul>
</template>

<script>
import {
    mdiPencil,
    mdiDelete,
} from '@mdi/js'

export default {
  props: {
    notes: {
      type: Array,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      icons: {
        mdiPencil,
        mdiDelete,
      },
      active: false
    }
  }
}
</script>

<style lang="scss" scoped>
  li {
    list-style-type: none;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 3px 5px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 3px 5px 0px rgba(34, 60, 80, 0.2);
  }
</style>
