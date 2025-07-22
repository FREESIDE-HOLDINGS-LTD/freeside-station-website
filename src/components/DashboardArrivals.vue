<template>
  <Window class="dashboard-arrivals">
    <WindowTitle>
      Shuttle Arrivals
    </WindowTitle>
    <WindowContent>
      <Flights :flights="flights" :arrivals="true"></Flights>
    </WindowContent>
  </Window>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Flight } from '@/domain/Flight';
import { events } from '@/data/events';
import Window from '@/components/Window.vue';
import WindowContent from '@/components/WindowContent.vue';
import WindowTitle from '@/components/WindowTitle.vue';
import Flights from '@/components/Flights.vue';

export default defineComponent({
  name: 'DashboardArrivals',
  components: {
    Window,
    WindowContent,
    WindowTitle,
    Flights,
  },
  computed: {
    flights(): Flight[] {
      return events.map((event) => new Flight(event));
    },
  },
});
</script>

<style scoped lang="scss">
</style>
