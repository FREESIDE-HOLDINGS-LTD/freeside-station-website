<template>
  <Window class="dashboard-comms">
    <WindowTitle>
      Comms
    </WindowTitle>
    <WindowContent>
      <table>
        <tbody>
          <tr>
            <td>
              #freeside@hackint
            </td>
            <td>
              <White>
                <ChangingNumber :min="1" :max="25" :precision="2"></ChangingNumber>
                Tbps
                down
                /
                <ChangingNumber :min="1" :max="25" :precision="2"></ChangingNumber>
                Tbps
                up
              </White>
            </td>
          </tr>
          <tr>
            <td>
              #milliways@hackint
            </td>
            <td>
              <White>
                <ChangingNumber :min="1" :max="25" :precision="2"></ChangingNumber>
                Tbps
                down
                /
                <ChangingNumber :min="1" :max="25" :precision="2"></ChangingNumber>
                Tbps
                up
              </White>
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
import White from '@/components/White.vue';

export default defineComponent({
  name: 'DashboardSystems',
  components: {
    Window,
    WindowContent,
    WindowTitle,
    ChangingNumber,
    White,
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
