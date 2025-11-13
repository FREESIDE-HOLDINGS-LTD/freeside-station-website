<template>
  <Window class="dashboard-video">
    <WindowContent>
      <video autoplay loop muted ref="video">
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
  mounted() {
    window.addEventListener('resize', this.resizeVideo);
    this.resizeVideo();
  },
  unmounted() {
    window.removeEventListener('resize', this.resizeVideo);
  },
  methods: {
    resizeVideo(): void {
      const videoWidth = 1280;
      const videoHeight = 720;
      const video = this.$refs.video as HTMLVideoElement;
      const height = (video.clientWidth * videoHeight) / videoWidth;
      video.style.height = `${height}px`;
    },
  },
});
</script>

<style scoped lang="scss">
.dashboard-video {
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
