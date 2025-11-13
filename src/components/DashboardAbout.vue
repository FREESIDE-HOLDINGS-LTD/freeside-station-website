<template>
  <Window class="dashboard-about">
    <WindowTitle>
      Freeside Station
    </WindowTitle>
    <WindowContent>
      <div>Build 19840701, copyright <span class="japanese">営団</span>Freeside</div>
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
        'Why wait?',
        'High tech/low life',
        'Even those who are in fear missing out!',
        'Don\'t believe his lies!',
        'From Bell Labs.',
        'Expires 1995.',
        'We just wanted a table.',
        '100% Mothra-compatible!',
      ];
      return slogans[Math.floor(Math.random() * slogans.length)];
    },
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

.japanese {
  font-family: 'M PLUS 1 Code';
}
</style>
