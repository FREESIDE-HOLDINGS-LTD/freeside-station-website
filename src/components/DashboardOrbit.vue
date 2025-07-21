<template>
  <Window class="dashboard-orbit">
    <WindowTitle>
      Orbit
    </WindowTitle>
    <WindowContent>
      <table>
        <tbody>
        <tr>
          <td>
            <i>e</i>
          </td>
          <td>
            <Red>restricted</Red>
          </td>
        </tr>
        <tr>
          <td>
            <i>a</i>
          </td>
          <td>
            <Red>restricted</Red>
          </td>
        </tr>
        <tr>
          <td>
            <i>i</i>
          </td>
          <td>
            <Red>restricted</Red>
          </td>
        </tr>
        <tr>
          <td>
            Ω
          </td>
          <td>
            <Red>restricted</Red>
          </td>
        </tr>
        <tr>
          <td>
            <i>ω</i>
          </td>
          <td>
            <Red>restricted</Red>
          </td>
        </tr>
        <tr>
          <td>
            M
          </td>
          <td>
            <Red>restricted</Red>
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
import Red from '@/components/Red.vue';

export default defineComponent({
  name: 'DashboardOrbit',
  components: {
    Window,
    WindowContent,
    WindowTitle,
    Red,
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
