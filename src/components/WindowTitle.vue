<template>
  <div class="window-title" ref="root">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PowerGlitch } from 'powerglitch';
import options from '@/components/glitch_options';

export default defineComponent({
  name: 'WindowTitle',
  mounted() {
    PowerGlitch.glitch(this.$refs.root as HTMLElement, options);
  },
});
</script>

<style scoped lang="scss">
.window-title {
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  border-bottom: var(--window-border-thickness) solid var(--window-border-color);
  padding: var(--window-padding);
}

@media (max-width: $media-query-squeeze-max-width) or (max-height: $media-query-squeeze-max-height) {
  .window-title {
    font-size: 12px;
    padding: calc(var(--window-padding) / 2);
  }
}
</style>
