<template>
  <div class="notes">
    <h3 class="mt-5 mb-5 d-flex justify-center notes__h3">My Notes</h3>

    <create 
      @add-note="addNote"
    />

    <notes-list 
      :notes="notes"
    />
  </div>
</template>

<script>
import NotesList from '@/components/Notes/List.vue';
import Create from '@/components/Notes/Create.vue';

export default {
  components: {
    NotesList, Create
  },
  data() {
    return {
      notes: [],
    }
  },
  methods: {
    addNote(newNote) {
      this.notes.push(newNote)
    }
  }
}
</script>

<style lang="scss" scoped>
  .notes__h3{
    font-size: 30px;
  }
</style>