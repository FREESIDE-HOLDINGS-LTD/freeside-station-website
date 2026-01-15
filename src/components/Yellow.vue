<template>
  <span class="yellow">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Yellow',
});
</script>

<style scoped lang="scss">
.yellow {
  color: $yellow;
  font-weight: bold;
}
</style>
