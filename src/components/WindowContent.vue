<template>
  <div class="window-content" ref="root">
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
  padding: var(--window-padding);
}

@media (max-width: $media-query-squeeze-max-width) or (max-height: $media-query-squeeze-max-height) {
  .window-content {
    padding: calc(var(--window-padding) / 4);
  }
}
</style>
