<template>
  <Window class="dashboard-about">
    <WindowTitle>
      Freeside<span class="blink"> - Why wait?</span>
    </WindowTitle>
    <WindowContent>
      <div>Build 19840701, <span class="japanese">営団</span>Freeside</div>
      <div>{{ slogan }}</div>
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
  computed: {
    slogan(): string {
      const slogans = [
        'High tech/low life',
        'Even those who are in fear missing out!',
        'Don\'t believe his lies!',
        'From Bell Labs.',
        'Expires 1995.',
        'We just wanted a table.',
      ];
      return slogans[Math.floor(Math.random() * slogans.length)];
    },
  },
});
</script>

<style scoped lang="scss">
.blink {
  animation: blink-animation 2s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}

.japanese {
  font-family: 'M PLUS 1 Code';
}
</style>
