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
          {{ flight.number.toUpperCase().replaceAll(' ', '') }}{{ flight.date.year }}
        </td>
        <td>
          {{ flight.direction }}
        </td>
        <td>
          {{ String(Math.floor(Math.random() * 12) + 1).padStart(2, '0') }}
        </td>
        <td>
          <div v-if="arrivals && hasDatePassed(flight.date) < 0">
            ARRIVED
          </div>
          <div v-if="arrivals && hasDatePassed(flight.date) == 0">
            ARRIVING
          </div>
          <div v-if="arrivals && hasDatePassed(flight.date) > 0">
            SCHEDULED
          </div>
          <div v-if="!arrivals && hasDatePassed(flight.date) < 0">
            DEPARTED
          </div>
          <div v-if="!arrivals && hasDatePassed(flight.date) == 0">
            DEPARTING
          </div>
          <div v-if="!arrivals && hasDatePassed(flight.date) > 0">
            SCHEDULED
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Flight } from '@/types/Flight';
import { Date as DateType } from '@/types/Date';

export default defineComponent({
  name: 'Flights',
  props: {
    flights: Object as PropType<Flight[]>,
    arrivals: Boolean,
  },
  methods: {
    hasDatePassed(v: DateType): number {
      const today = new Date();
      const targetDate = new Date(v.year, v.month - 1, v.day);

      today.setHours(0, 0, 0, 0);
      targetDate.setHours(0, 0, 0, 0);

      if (targetDate < today) {
        return -1;
      }

      if (targetDate > today) {
        return 1;
      }

      return 0;
    },
  },
});
</script>

<style scoped lang="scss">
table {
  width: 100%;
  text-align: left;
}
</style>
