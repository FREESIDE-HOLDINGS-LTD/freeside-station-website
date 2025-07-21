<template>
  <span class="red">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Red',
});
</script>

<style scoped lang="scss">
.red {
  color: var(--red);
  font-weight: bold;
}
</style>
