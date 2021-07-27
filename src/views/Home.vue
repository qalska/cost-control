<template>
  <div class="d-flex justify-space-between mt-4">
    <div>
      <chart />

    </div>

    <costs-list />
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import CostsList from '@/components/CostsList.vue';

export default {
  components: {
    Chart, CostsList
  },
}
</script>

<style>

</style>