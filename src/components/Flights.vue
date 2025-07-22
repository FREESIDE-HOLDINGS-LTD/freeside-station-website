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
      <tr v-for="flight in flights" :key="flight.date">
        <td>
          {{ flight.date.year }}-{{ String(flight.date.month).padStart(2, '0') }}-{{ String(flight.date.day).padStart(2, '0') }}
        </td>
        <td>
          {{ String(Math.floor(Math.random() * 24) + 1).padStart(2, '0') }}:{{ String(Math.floor(Math.random() * 60) + 1).padStart(2, '0') }}
        </td>
        <td>
          {{ flight.number }}
        </td>
        <td>
          {{ flight.direction }}
        </td>
        <td>
          {{ String(Math.floor(Math.random() * 12) + 1).padStart(2, '0') }}
        </td>
        <td>
          <Red v-if="arrivals && hasDatePassed(flight.date) < 0">
            ARRIVED
          </Red>
          <Green v-if="arrivals && hasDatePassed(flight.date) == 0" class="active">
            ARRIVING
          </Green>
          <Red v-if="!arrivals && hasDatePassed(flight.date) < 0">
            DEPARTED
          </Red>
          <Green v-if="!arrivals && hasDatePassed(flight.date) == 0" class="active">
            DEPARTING
          </Green>
          <Green v-if="hasDatePassed(flight.date) > 0">
            SCHEDULED
          </Green>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Flight } from '@/domain/Flight';
import { Date, hasDatePassed } from '@/domain/Date';
import Green from '@/components/Green.vue';
import Red from '@/components/Red.vue';

export default defineComponent({
  name: 'Flights',
  props: {
    flights: Object as PropType<Flight[]>,
    arrivals: Boolean,
  },
  components: {
    Green,
    Red,
  },
  methods: {
    hasDatePassed(v: Date): number {
      return hasDatePassed(v);
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

  .active {
    animation: blinker 2s step-start infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
}
</style>
