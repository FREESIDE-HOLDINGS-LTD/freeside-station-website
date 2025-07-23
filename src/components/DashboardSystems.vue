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
              Reactor output
            </td>
            <td>
              <Green>
                <ChangingNumber :min="27.1" :max="27.2" :precision="2"></ChangingNumber> GW
              </Green>
            </td>
          </tr>
          <tr>
            <td>
              Attitude control
            </td>
            <td>
              <Green>online</Green>
            </td>
          </tr>
          <tr>
            <td>
              Orbit change
            </td>
            <td>
              <Green>scheduled</Green>
            </td>
          </tr>
          <tr>
            <td>
              Life support
            </td>
            <td>
              <Green>online</Green>
            </td>
          </tr>
          <tr>
            <td>
              Pool on the roof
            </td>
            <td>
              <Red>leaking</Red>
            </td>
          </tr>
          <tr>
            <td>
              Isopod colony
            </td>
            <td>
              <Green>nominal</Green>
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
import Green from '@/components/Green.vue';
import Red from '@/components/Red.vue';

export default defineComponent({
  name: 'DashboardSystems',
  components: {
    Window,
    WindowContent,
    WindowTitle,
    ChangingNumber,
    Green,
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
