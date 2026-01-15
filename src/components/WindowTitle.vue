<template>
  <div class="window-title" ref="root">
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
.window-title {
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  border-bottom: $window-border-thickness solid $window-border-color;
  padding: $window-padding;
}

@media (max-width: $media-query-squeeze-max-width) or (max-height: $media-query-squeeze-max-height) {
  .window-title {
    font-size: 12px;
    padding: calc($window-padding / 2);
  }
}
</style>
