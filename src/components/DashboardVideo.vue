<template>
  <Window class="dashboard-video">
    <WindowContent>
      <video autoplay loop muted>
         <source src="video.mp4" type="video/mp4">
      </video>
    </WindowContent>
  </Window>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Window from '@/components/Window.vue';
import WindowContent from '@/components/WindowContent.vue';

export default defineComponent({
  name: 'DashboardVideo',
  components: {
    Window,
    WindowContent,
  },
});
</script>

<style scoped lang="scss">
video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
