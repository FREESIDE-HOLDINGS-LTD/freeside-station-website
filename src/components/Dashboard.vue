<template>
  <div class="dashboard">
    <div class="column left">
      <DashboardAbout></DashboardAbout>
      <DashboardVideo></DashboardVideo>

      <div class="below-video">
        <div>
          <DashboardOrbit></DashboardOrbit>
          <DashboardSystems></DashboardSystems>
        </div>
        <div>
          <DashboardComms></DashboardComms>
          <DashboardTransmitters></DashboardTransmitters>
          <DashboardHosting></DashboardHosting>
        </div>
      </div>
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
import DashboardTransmitters from '@/components/DashboardTransmitters.vue';
import DashboardHosting from '@/components/DashboardHosting.vue';
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
    DashboardTransmitters,
    DashboardHosting,
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

  font-size: 12px;

  display: flex;
  flex-flow: row nowrap;

  .column {
    display: flex;
    flex-flow: column nowrap;

    &.left {
      width: 50%;

      .dasboard-about {
        flex-shrink: 0;
      }

      .dashboard-video {
        flex-shrink: 10;
      }

      .below-video {
        display: flex;
        flex-flow: row nowrap;
        flex: 1;

        >* {
          width: 50%;
          display: flex;
          flex-flow: column nowrap;

          >*:last-child {
            flex: 1;
          }
        }
      }
    }

    &.right {
      width: 50%;

      .dashboard-departures, .dashboard-arrivals {
        flex: 1;
      }
    }
  }
}

@media (max-width: 1600px) {
  .dashboard {
    flex-flow: column nowrap;
    height: auto;

    .column {
      &.left, &.right {
        width: auto;
      }

      &.left {
        .below-video {
          flex-flow: column nowrap;

          >* {
            width: auto;
          }
        }
      }
    }
  }
}
</style>
