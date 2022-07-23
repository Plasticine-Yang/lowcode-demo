<script setup lang="ts">
import type { EditorDataItem } from "@/api";
import { useEditorStore } from "@/store";
import { reactive } from "vue";

const editorStore = useEditorStore();

const handleDragOver = (e: DragEvent) => {
  e.preventDefault();
};

const handleDrop = (e: DragEvent) => {
 // do something
};

const handleClick = (e: MouseEvent) => {
  // 通过tag获取唯一的组件， 每个组件身上存在着id 和 tag
  const tag = (e.target as HTMLElement).dataset.tag;
  const data = tag && editorStore.getDataByTag(tag);
  data && editorStore.setSelectedData(data);
};
</script>

<template>
  <div class="canvas bg" @dragover="handleDragOver" @drop="handleDrop">
    <div class="canvas-content">
      <div class="canvas-no-item" v-if="!editorStore.canvasDataList.length">
        请从左侧选择项目拖拽进此
      </div>
      <div v-else>
        <div
          v-for="{
            id,
            tag,
            top,
            left,
            data,
            width,
            height,
            color,
            size,
          } in editorStore.canvasDataList"
          :data-id="id"
          :data-tag="tag"
          :key="id"
          :style="{
            position: 'absolute',
            top,
            left,
            width,
            height,
            color,
            fontSize: size,
          }"
          @click="handleClick"
        >
          {{ data }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.canvas {
  flex: 1;
  background-color: hsl(255, 0%, 98%);
}

.canvas-content {
  height: 100%;
}
.canvas-no-item {
  color: #000000;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 200px;
}
</style>
