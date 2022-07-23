<script setup lang="ts">
import LeftPanel from "@/components/LeftPanel.vue";
import Canvas from "@/components/Canvas.vue";
import RightPanel from "@/components/RightPanel.vue";
</script>

<template>
  <div class="container">
    <LeftPanel />
    <Canvas />
    <RightPanel />
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 20px;
  height: 100%;
  background-color: #1f2335;
  padding: 20px;
  color: #ffffff;
}
</style>
