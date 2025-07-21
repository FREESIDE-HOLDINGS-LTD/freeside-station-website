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
            <Restricted></Restricted>
          </td>
        </tr>
        <tr>
          <td>
            <i>a</i>
          </td>
          <td>
            <Restricted></Restricted>
          </td>
        </tr>
        <tr>
          <td>
            <i>i</i>
          </td>
          <td>
            <Restricted></Restricted>
          </td>
        </tr>
        <tr>
          <td>
            Ω
          </td>
          <td>
            <Restricted></Restricted>
          </td>
        </tr>
        <tr>
          <td>
            <i>ω</i>
          </td>
          <td>
            <Restricted></Restricted>
          </td>
        </tr>
        <tr>
          <td>
            M
          </td>
          <td>
            <Restricted></Restricted>
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
import Restricted from '@/components/Restricted.vue';

export default defineComponent({
  name: 'DashboardOrbit',
  components: {
    Window,
    WindowContent,
    WindowTitle,
    Restricted,
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
