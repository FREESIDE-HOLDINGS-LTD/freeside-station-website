<template>
  <div class="home">
    <Dashboard/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Dashboard from '@/components/Dashboard.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Dashboard,
  },
});
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
