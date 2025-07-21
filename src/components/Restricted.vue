<template>
  <span class="restricted">
      restricted
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Restricted',
});
</script>

<style scoped lang="scss">
.restricted {
  color: var(--color-restricted);
  font-weight: bold;
}
</style>
