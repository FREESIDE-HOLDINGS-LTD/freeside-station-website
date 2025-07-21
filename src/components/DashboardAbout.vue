<template>
  <Window class="dashboard-about">
    <WindowTitle>
      Freeside Station
    </WindowTitle>
    <WindowContent>
      <div>Build 19840701</div>
      <div>Copyright Freeside Orbital</div>
    </WindowContent>
  </Window>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Window from '@/components/Window.vue';
import WindowContent from '@/components/WindowContent.vue';
import WindowTitle from '@/components/WindowTitle.vue';

export default defineComponent({
  name: 'DashboardAbout',
  components: {
    Window,
    WindowContent,
    WindowTitle,
  },
});
</script>

<style scoped lang="scss">
table {
  width: 100%;

  td:first-child {
    text-align: left;
  }

  td:last-child {
    text-align: right;
  }
}
</style>
