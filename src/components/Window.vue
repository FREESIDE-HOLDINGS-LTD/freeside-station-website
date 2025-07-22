<template>
  <div class="window">
    <div class="wrapper">
      <slot></slot>
    </div>
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
  box-sizing: border-box;
  padding: 1em;
  overflow-y: hidden;
  overflow-x: hidden;

  .wrapper {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border: var(--window-border-thickness) solid var(--window-border-color);
    overflow-y: scroll;
    overflow-x: hidden;

    display: flex;
    flex-flow: column nowrap;
  }
}
</style>
