<template>
  <Window class="dashboard-departures">
    <WindowTitle>
      Shuttle Departures
    </WindowTitle>
    <WindowContent>
      <Flights :flights="flights" :arrivals="false"></Flights>
    </WindowContent>
  </Window>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Flight } from '@/types/Flight';
import { events } from '@/data/events';
import Window from '@/components/Window.vue';
import WindowContent from '@/components/WindowContent.vue';
import WindowTitle from '@/components/WindowTitle.vue';
import Flights from '@/components/Flights.vue';

export default defineComponent({
  name: 'DashboardDepartures',
  components: {
    Window,
    WindowContent,
    WindowTitle,
    Flights,
  },
  computed: {
    flights(): Flight[] {
      return events
        .map((event) => (
          {
            date: event.start,
            number: event.name,
            direction: event.location,
          }
        ));
    },
  },
});
</script>

<style scoped lang="scss">
</style>
