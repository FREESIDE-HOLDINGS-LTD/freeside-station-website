<template>
  <div class="window-title">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WindowTitle',
});
</script>

<style scoped lang="scss">
</style>
