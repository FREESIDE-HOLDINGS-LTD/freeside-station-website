<template>
  <div class="dashboard">
    <DashboardArrivals></DashboardArrivals>
    <DashboardDepartures></DashboardDepartures>
    <DashboardVideo></DashboardVideo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DashboardArrivals from '@/components/DashboardArrivals.vue';
import DashboardDepartures from '@/components/DashboardDepartures.vue';
import DashboardVideo from '@/components/DashboardVideo.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    DashboardArrivals,
    DashboardDepartures,
    DashboardVideo,
  },
});
</script>

<style scoped lang="scss">
.dashboard {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns:
      20% 60% 20%;
  grid-template-rows:
      auto;
  grid-template-areas:
    "arrivals video departures"
    "arrivals video departures"
    "arrivals video departures";
}

.dashboard-arrivals {
    grid-area: arrivals;
}

.dashboard-departures {
    grid-area: departures;
}

.dashboard-video {
    grid-area: video;
}
</style>
