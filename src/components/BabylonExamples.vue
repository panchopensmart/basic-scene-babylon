<template>
  <!-- basic scene -->
  <div class="">
    <h3>Babylon Config</h3>
    <canvas></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {StandartMaterials} from "@/BabylonExamples/StandartMaterials";

export default defineComponent({
  name: 'BabylonExamples',
  mounted() {
      const canvas = document.querySelector('canvas')!;
      new StandartMaterials(canvas);
  },
});
</script>

<style scoped>
canvas {
  width: 70%;
  height: 70%;
}
</style>
