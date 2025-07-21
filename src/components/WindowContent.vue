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
  }
</style>
