<template>
  <Window class="dashboard-comms">
    <WindowTitle>
      Broadcasts
    </WindowTitle>
    <WindowContent>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="https://chaos.social/@freeside">https://chaos.social/@freeside</a>
            </td>
            <td>
              <ChangingNumber :min="6.1" :max="6.2" :precision="1"></ChangingNumber>
              MW
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
import ChangingNumber from '@/components/ChangingNumber.vue';

export default defineComponent({
  name: 'DashboardTransmitters',
  components: {
    Window,
    WindowContent,
    WindowTitle,
    ChangingNumber,
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
