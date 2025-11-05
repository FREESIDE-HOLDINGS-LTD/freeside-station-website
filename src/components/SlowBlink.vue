<template>
  <span class="slow-blink">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SlowBlink',
});
</script>

<style scoped lang="scss">
.slow-blink {
  animation: blink 1s step-start 0s infinite;
}

@keyframes blink {
  50% {
    color: transparent;
  }
}
</style>
