<template>
  <Window class="dashboard-transmitters">
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
              <White>
                <ChangingNumber :min="6.1" :max="6.2" :precision="1"></ChangingNumber>
                MW
              </White>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://github.com/FREESIDE-HOLDINGS-LTD">https://github.com/FREESIDE-HOLDINGS-LTD</a>
            </td>
            <td>
              <White>
                <ChangingNumber :min="5.1" :max="5.5" :precision="1"></ChangingNumber>
                MW
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
  name: 'DashboardTransmitters',
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
