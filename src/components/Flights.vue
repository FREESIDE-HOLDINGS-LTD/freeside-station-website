<template>
  <table class="flights">
    <thead>
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Flight Number</th>
        <th>Direction</th>
        <th>Pad</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="flight in flights" :key="flight.date" :class="{ blink: flight.offStation() }">
        <td>
          {{ date(flight) }}
        </td>
        <td>
          {{ time() }}
        </td>
        <td>
          {{ flight.number() }}
        </td>
        <td>
          {{ flight.direction() }}
        </td>
        <td>
          {{ flight.pad() }}
        </td>
        <td>
          <Green v-if="arrivals && flight.statusArrivalScheduled()">
            SCHEDULED
          </Green>
          <Red v-if="arrivals && flight.statusArrived()">
            ARRIVED
          </Red>
          <Yellow v-if="arrivals && flight.statusArriving()">
            ARRIVING
          </Yellow>
          <Green v-if="!arrivals && flight.statusDepartureScheduled()">
            SCHEDULED
          </Green>
          <Red v-if="!arrivals && flight.statusDeparted()">
            DEPARTED
          </Red>
          <Yellow v-if="!arrivals && flight.statusDeparting()">
            DEPARTING
          </Yellow>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Flight } from '@/domain/Flight';
import { Date } from '@/domain/Date';
import Green from '@/components/Green.vue';
import Red from '@/components/Red.vue';
import Yellow from '@/components/Yellow.vue';

export default defineComponent({
  name: 'Flights',
  props: {
    flights: Object as PropType<Flight[]>,
    arrivals: Boolean,
  },
  components: {
    Green,
    Red,
    Yellow,
  },
  methods: {
    date(v: Flight): string {
      if (this.arrivals) {
        return this.formatDate(v.arrivalDate());
      }
      return this.formatDate(v.departureDate());
    },
    time(): string {
      const hour = String(Math.floor(Math.random() * 24) + 1).padStart(2, '0');
      const minute = String(Math.floor(Math.random() * 60) + 1).padStart(2, '0');
      return `${hour}:${minute}`;
    },
    formatDate(v: Date): string {
      return `${v.year}-${String(v.month).padStart(2, '0')}-${String(v.day).padStart(2, '0')}`;
    },
  },
});
</script>

<style scoped lang="scss">
table {
  width: 100%;
  text-align: left;

  td, th {
    padding: .2em;

    &:last-child {
      text-align: right;
    }
  }

  .blink {
    animation: blinker 2s step-start infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
}
</style>
