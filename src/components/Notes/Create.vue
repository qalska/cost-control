<template>
  <div class="notes__create mx-auto">

      <v-btn icon @click="isShow = true">
          <v-icon>{{ mdiPlusThick }}</v-icon>
      </v-btn>

      <v-form v-if="isShow">
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

        <div class="mb-4">
            <v-btn
                color="success"
                @click="createNote">
                Add
            </v-btn>

            <v-btn
                color="error"
                class="ml-4"
                @click="isShow = false">
                Close
            </v-btn>
        </div>
    </v-form>
  </div>
</template>

<script>
import { mdiPlusThick } from '@mdi/js';

export default {
    data() {
        return {
            note: {
                id: 1,
                category: '',
                text: '',
                date: null,
            },
            categories: ['1', '2', '3'],
            isShow: false,
            mdiPlusThick
        }
    },
    methods: {
        createNote() {
            let newNote = {
                ...this.note,
                id: this.note.id++,
                category: this.note.category,
                text: this.note.text,
                date: new Date(),
                isEditing: false
            }

            this.$emit('add-note', newNote);

            this.note.category = '';
            this.note.text = '';
            this.note.date = null;
        }
    }
}
</script>

<style lang="scss" scoped>
    .notes__create {
        width: 80%;
    }

</style>