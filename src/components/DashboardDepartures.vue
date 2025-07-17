<template>
  <Window class="dashboard-departures">
    <WindowTitle>
      Departures
    </WindowTitle>
    <WindowContent>
      Content
    </WindowContent>
  </Window>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DashboardDepartures',
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
</style>
