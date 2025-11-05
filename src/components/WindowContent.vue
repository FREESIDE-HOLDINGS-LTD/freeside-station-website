<template>
  <div class="window-content" ref="root">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PowerGlitch } from 'powerglitch';
import options from '@/components/glitch_options';

export default defineComponent({
  name: 'WindowContent',
  mounted() {
    PowerGlitch.glitch(this.$refs.root as HTMLElement, options);
  },
});
</script>

<style scoped lang="scss">
.window-content {
  flex: 1;
  padding: var(--window-padding);
}

@media (max-height: 1500px) {
  .window-content {
    padding: calc(var(--window-padding) / 2);
  }
}
</style>
