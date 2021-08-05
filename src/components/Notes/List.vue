<template>
  <ul class="notes__list pl-0">
    <li class="pl-3 pr-3 pb-2 pt-1 mb-3"
      v-for="(note, idx) of notes"
      :key="idx">
      <div v-show="!note.isEditing">
        <div class="d-flex justify-space-between">
          <div class="text-overline mb-4">
            {{ note.date }}
          </div>

          <div>
            <v-btn icon text
            @click="editNote(idx)">
              <v-icon>{{ icons.mdiPencil }}</v-icon>
            </v-btn>
            <v-btn icon text class="ml-2"
            @click="deleteNote(idx)">
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
      </div>

      <div v-show="note.isEditing">
        <v-form>
          <v-select
              v-model="note.category"
              :items="categories"
              label="Category"
              required>
          </v-select>

          <v-text-field
              v-model="note.text"
              label="Text"
              required>
          </v-text-field>

          <div class="mb-4 d-flex justify-end">
              <v-btn
                  color="success"
                  @click="note.isEditing = false">
                  Save
              </v-btn>
          </div>
        </v-form>
      </div>

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
    }
  },
  methods: {
    editNote(idx) {
      let note = this.notes[idx];
      note.isEditing = true;
    },
    deleteNote(idx) {
      this.notes.splice(idx, 1);
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
