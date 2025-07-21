<template>
  <Window class="dashboard-hosting">
    <WindowTitle>
      Hosting
    </WindowTitle>
    <WindowContent>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="https://freeside.ltd">freeside.ltd</a>
            </td>
            <td>
              <Green>live</Green>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://industries.freeside.ltd">industries.freeside.ltd</a>
            </td>
            <td>
              <Green>live</Green>
            </td>
          </tr>
        </tbody>
      </table>
    </WindowContent>
  </Window>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Window from '@/components/Window.vue';
import WindowContent from '@/components/WindowContent.vue';
import WindowTitle from '@/components/WindowTitle.vue';
import Green from '@/components/Green.vue';

export default defineComponent({
  name: 'DashboardTransmitters',
  components: {
    Window,
    WindowContent,
    WindowTitle,
    Green,
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
