<template>
  <span class="changing-number">
    <span v-if="number !== undefined">
      {{ number.toFixed(precision) }}
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChangingNumber',
  mounted() {
    this.updateNumber();
  },
  unmounted() {
    if (this.timeoutId !== undefined) {
      window.clearTimeout(this.timeoutId);
    }
  },
  props: {
    precision: Number,
    min: Number,
    max: Number,
  },
  data() {
    return {
      number: undefined as (undefined | number),
      timeoutId: undefined as (undefined | number),
    };
  },
  methods: {
    updateNumber(): void {
      this.number = this.min! + Math.random() * (this.max! - this.min!);
      this.timeoutId = window.setTimeout(this.updateNumber, 1000);
    },
  },
});
</script>

<style scoped lang="scss">
</style>
