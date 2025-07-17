<template>
  <div class="window-content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WindowContent',
});
</script>

<style scoped lang="scss">
  .window-content {
    flex: 1;
  }
</style>
