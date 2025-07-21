<template>
  <Window class="dashboard-systems">
    <WindowTitle>
      Systems
    </WindowTitle>
    <WindowContent>
      <table class="flights">
        <tbody>
          <tr>
            <td>
              Life support
            </td>
            <td>
              online
            </td>
          </tr>
          <tr>
            <td>
              Attitude control
            </td>
            <td>
              online
            </td>
          </tr>
          <tr>
            <td>
              Signature scrambling
            </td>
            <td>
              online
            </td>
          </tr>
          <tr>
            <td>
              Life support
            </td>
            <td>
              online
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

export default defineComponent({
  name: 'DashboardSystems',
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
    color: var(--green);
  }
}
</style>
