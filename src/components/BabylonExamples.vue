<template>
  <!-- basic scene -->
  <div class="">
    <h3>Babylon Examples</h3>
    <canvas></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BasicScene } from '@/BabylonExamples/BasicScene';

export default defineComponent({
  name: 'BabylonExamples',
  mounted() {
      const canvas = document.querySelector('canvas')!;
      new BasicScene(canvas);
  },
});
</script>

<style scoped>
canvas {
  width: 70%;
  height: 70%;
}
</style>
