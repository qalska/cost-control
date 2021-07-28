<template>
  <div>
    <v-simple-table class="notes-list__table">
      <template v-slot:default>
        <tbody>
          <tr v-for="note of notes"
            :key="note.id">
            <td class="notes-list__category">{{ note.category }}</td>
            <td class="notes-list__date">{{ note.date }}</td>
            <td class="notes-list__text"> 
              <div class="notes-list__text-wrapper">
                  {{ note.text }}
              </div>
            </td>
            <td class="notes-list__actions">
              <div>
                <v-btn icon text class="notes-list__edit" >
                    <v-icon>{{ icons.mdiPencil }}</v-icon>
                </v-btn>
                <v-btn icon text class="notes-list__delete ml-2">
                    <v-icon>{{ icons.mdiDelete }}</v-icon>
                </v-btn>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
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
    }
  }
}
</script>
