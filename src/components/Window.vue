<template>
  <div class="window">
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PowerGlitch } from 'powerglitch';

export default defineComponent({
  name: 'Window',
  mounted() {
    const options = {
      timing: {
        duration: 10000,
      },
      glitchTimeSpan: {
        end: 0.6,
      },
      shake: {
        amplitudeX: 0.02,
        amplitudeY: 0.02,
      },
    };
    PowerGlitch.glitch('.window-title', options);
    PowerGlitch.glitch('.window-content', options);
  },
});
</script>

<style scoped lang="scss">
.window {
  box-sizing: border-box;
  padding: 1em;
  overflow-y: hidden;
  overflow-x: hidden;

  .wrapper {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
    padding: 1em;
    overflow-y: scroll;
    overflow-x: hidden;

    display: flex;
    flex-flow: column nowrap;
  }
}
</style>
