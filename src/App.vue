<template>
  <v-app>
    <NavBar />

    <router-view />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  methods: mapActions(['fetchCosts', 'fetchCategories']),
  async mounted() {
    this.fetchCosts(),
    this.fetchCategories()
  }
};
</script>
