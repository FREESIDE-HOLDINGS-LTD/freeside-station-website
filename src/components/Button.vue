<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
});
</script>

<style scoped lang="scss">
.button {
  background-color: transparent;
  padding: 1em;
  border: 1px solid var(--white);
  color: var(--white);
  text-transform: uppercase;
  font-family: inherit;
  font-size: inherit;
}
</style>
