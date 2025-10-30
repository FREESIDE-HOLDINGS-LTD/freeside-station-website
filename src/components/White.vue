<template>
  <span class="white">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'White',
});
</script>

<style scoped lang="scss">
.white {
  color: var(--white);
  font-weight: bold;
}
</style>
