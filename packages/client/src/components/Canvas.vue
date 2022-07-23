<script setup lang="ts">
import type { EditorDataItem } from "@/api";
import { useEditorStore } from "@/store";
import { reactive } from "vue";

const canvasDataList = reactive<EditorDataItem[]>([]);

const editorStore = useEditorStore();

const handleDragOver = (e: DragEvent) => {
  e.preventDefault();
};

const handleDrop = (e: DragEvent) => {
  canvasDataList.push(...editorStore.canvasDataList);
};

const handleClick = (e: MouseEvent) => {
  const id = Number((e.target as HTMLElement).dataset.id);
  const data = editorStore.getDataById(id);
  data && editorStore.setSelectedData(data);
};
</script>

<template>
  <div class="canvas bg" @dragover="handleDragOver" @drop="handleDrop">
    <div v-for="{
      id,
      top,
      left,
      data,
      width,
      height,
      color,
      size,
    } in canvasDataList" :data-id="id" :key="id" :style="{
  position: 'absolute',
  top,
  left,
  width,
  height,
  color,
  fontSize: size,
}" @click="handleClick">
      {{ data }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.canvas {
  position: relative;
  flex: 1;
}
</style>
