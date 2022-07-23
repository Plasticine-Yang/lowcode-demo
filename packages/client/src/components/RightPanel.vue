<script setup lang="ts">
import type { EditorDataItem } from "@/api";
import { useEditorStore } from "@/store";
import { computed, toRefs } from "vue";

const editorStore = useEditorStore();

const selectedData = computed<EditorDataItem | null>(
  () => editorStore.selectedData
);
</script>

<template>
  <div class="right-panel bg">
    <div v-if="!selectedData" :style="{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }">
      未选中元素
    </div>
    <ul v-else>
      <li>文本颜色: {{ selectedData.color }}</li>
      <li>文字大小: {{ selectedData.size }}</li>
      <li>文本框宽度: {{ selectedData.width }}</li>
      <li>文本框高度: {{ selectedData.height }}</li>
      <li>文本框坐标: x: {{ selectedData.left }}, y: {{ selectedData.top }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.right-panel {
  width: 300px;
}
</style>
