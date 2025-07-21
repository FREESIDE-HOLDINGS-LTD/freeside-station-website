<template>
  <div class="dashboard">
    <div class="column left">
      <DashboardAbout></DashboardAbout>
      <DashboardOrbit></DashboardOrbit>
      <DashboardSystems></DashboardSystems>
    </div>
    <div class="column center">
      <DashboardVideo></DashboardVideo>
      <DashboardComms></DashboardComms>
    </div>
    <div class="column right">
      <DashboardArrivals></DashboardArrivals>
      <DashboardDepartures></DashboardDepartures>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DashboardOrbit from '@/components/DashboardOrbit.vue';
import DashboardSystems from '@/components/DashboardSystems.vue';
import DashboardComms from '@/components/DashboardComms.vue';
import DashboardAbout from '@/components/DashboardAbout.vue';
import DashboardArrivals from '@/components/DashboardArrivals.vue';
import DashboardDepartures from '@/components/DashboardDepartures.vue';
import DashboardVideo from '@/components/DashboardVideo.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    DashboardOrbit,
    DashboardSystems,
    DashboardAbout,
    DashboardComms,
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

  font-size: 10px;

  display: flex;
  flex-flow: row nowrap;

  .column {
    display: flex;
    flex-flow: column nowrap;

    &.left {
      width: 20%;
    }

    &.right {
      width: 40%;
    }

    &.center {
      flex: 1;
    }

    >:last-child, .dashboard-departures, .dashboard-arrivals {
      flex: 1;
    }
  }
}
</style>
