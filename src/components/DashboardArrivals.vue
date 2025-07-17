<template>
  <Window class="dashboard-arrivals">
    <WindowTitle>
      Arrivals
    </WindowTitle>
    <WindowContent>
      Content
    </WindowContent>
  </Window>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DashboardArrivals',
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
</style>
