<script setup lang="ts">
import { onMounted, ref } from "vue";

import { getDataList } from "@/api";

import { useEditorStore } from "@/store";

const editorStore = useEditorStore();

const handleDragEnd = (e: DragEvent) => {
  const target = e.target as HTMLElement;
  const id = Number(target.dataset.id);

  // 根据 dataset 中绑定的 id 获取到对应的组件信息
  // 然后就可以在画布的 drop 事件中获取到
  const data = editorStore.getDataById(id);

  if (data) {
    data.top = `${e.y}px`;
    data.left = `${e.x}px`;
    editorStore.addCanvasData(data);
  }
};

onMounted(() => {
  getDataList().then(({ data }) => {
    const { data: dataList } = data;
    editorStore.setEditorDataList(dataList);
  });
});
</script>

<template>
  <div class="left-panel bg">
    <div v-for="{ id, data, size } in editorStore.editorDataList" :data-id="id" :draggable="true" :style="{
      cursor: 'grab',
      userSelect: 'none',
      backgroundColor: '#ffffff',
      textAlign: 'center',
      lineHeight: '30px',
      color: '#000000',
      fontSize: size,
      width: '100px',
      height: '30px',
    }" :key="id" @dragend="handleDragEnd">
      {{ data }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.left-panel {
  width: 300px;
  padding: 30px;
}
</style>
