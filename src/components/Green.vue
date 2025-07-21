<template>
  <span class="green">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Green',
});
</script>

<style scoped lang="scss">
.green {
  color: var(--green);
  font-weight: bold;
}
</style>
