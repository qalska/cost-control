<template>
  <div class="notes__create">

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

        <div class="mb-4 d-flex justify-end">
            <v-btn
                color="success"
                @click="createNote">
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
            note: {
                id: 1,
                category: '',
                text: '',
                date: null,
            },
            categories: ['1', '2', '3'], // временно
        }
    },
    methods: {
        formatDate(date) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timezone: 'UTC',
            };

            return date.toLocaleString("en-US", options);
        },
        createNote() {
            let newNote = {
                ...this.note,
                id: this.note.id++,
                category: this.note.category,
                text: this.note.text,
                date: this.formatDate(new Date()),
                isEditing: false
            }

            this.$emit('add-note', newNote);

            this.note.category = '';
            this.note.text = '';
            this.note.date = null;
        },
        changeIsShow() {
            this.$emit('change-is-show', this.isShow);
        }
    }
}
</script>
