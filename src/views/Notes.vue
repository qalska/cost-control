<template>
  <div class="notes mx-auto">
    <div class="d-flex flex-row justify-center">
      <h3 class="mt-5 mb-5 notes__h3">My Notes</h3>

      <v-btn class="mt-4 ml-2" icon x-large @click="isShow = !isShow">
        <v-icon>{{ mdiPlusThick }}</v-icon>
      </v-btn>
    </div>

    <create 
      @add-note="addNote"
      :isShow="isShow"
      @change-is-show="changeIsShow"
    />

    <notes-list 
      :notes="notes"
    />
  </div>
</template>

<script>
import NotesList from '@/components/Notes/List.vue';
import Create from '@/components/Notes/Create.vue';
import { mdiPlusThick } from '@mdi/js';

export default {
  components: {
    NotesList, Create
  },
  data() {
    return {
      notes: [],
      isShow: false,
      mdiPlusThick
    }
  },
  methods: {
    addNote(newNote) {
      this.notes.push(newNote)
      this.isShow = false;
    },
    changeIsShow(isShow) {
      this.isShow = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .notes {
    width: 80%;
    &__h3 {
      font-size: 30px;
      color: #757575;
    }
  }
</style>