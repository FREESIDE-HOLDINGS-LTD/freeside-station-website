<template>
  <div class="window">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Window',
});
</script>

<style scoped lang="scss">
.window {
  height: 100%;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
}
</style>
