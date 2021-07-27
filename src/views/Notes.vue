<template>
  <div class="notes">
    <h3 class="mt-5 mb-5 d-flex justify-center notes__h3">My Notes</h3>

    <notes-list />
  </div>
</template>

<script>
import NotesList from '@/components/NotesList.vue';

export default {
  components: {
    NotesList
  },
}
</script>

<style lang="scss" scoped>
  .notes__h3{
    font-size: 30px;
  }
</style>