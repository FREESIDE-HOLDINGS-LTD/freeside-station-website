<template>
  <Window class="dashboard-public-address">
    <WindowTitle>
      Public Address System
    </WindowTitle>
    <WindowContent>
      <table>
        <tbody>
          <tr>
            <td>
              Status
            </td>
            <td>
              <Green v-if="!playing">
                stby
              </Green>
              <Green v-if="playing">
                playing
              </Green>
            </td>
          </tr>
        </tbody>
      </table>
      <Button @click="playMusic()" v-if="!playing">
        initiate station-wide broadcast
      </Button>
      <Button @click="stopMusic()" v-if="playing">
        <span v-if="!triedStopping">
          abort station-wide broadcast
        </span>
        <Red v-if="triedStopping">
          <SlowBlink>pa controller failure</SlowBlink>
        </Red>
      </Button>
      <audio ref="audio" src="Mariachi-Music.mp3" loop></audio>
    </WindowContent>
  </Window>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Window from '@/components/Window.vue';
import WindowContent from '@/components/WindowContent.vue';
import WindowTitle from '@/components/WindowTitle.vue';
import Green from '@/components/Green.vue';
import Button from '@/components/Button.vue';
import Red from '@/components/Red.vue';
import SlowBlink from '@/components/SlowBlink.vue';

export default defineComponent({
  name: 'DashboardPublicAddress',
  components: {
    Window,
    WindowContent,
    WindowTitle,
    Green,
    Button,
    Red,
    SlowBlink,
  },
  data() {
    return {
      playing: false,
      triedStopping: false,
    };
  },
  methods: {
    playMusic() {
      const audio = this.$refs.audio as HTMLAudioElement;
      audio.play();
      this.playing = true;
    },
    stopMusic() {
      this.triedStopping = true;
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

audio {
  display: none;
}
</style>
