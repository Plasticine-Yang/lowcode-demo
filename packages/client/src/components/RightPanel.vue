<script setup lang="ts">
import type { EditorDataItem } from "@/api";
import { useEditorStore } from "@/store";
import { computed } from "vue";

const editorStore = useEditorStore();

// 对选中的数据进行响应式， 由v-model做双向绑定
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
      <li>文本颜色:&nbsp;<input v-model="selectedData.color" type="text"></li>
      <li>文字大小:&nbsp;<input v-model="selectedData.size"></li>
      <li>文本框宽度:&nbsp;<input v-model="selectedData.width"></li>
      <li>文本框高度&nbsp;<input v-model="selectedData.height"></li>
      <li>文本框坐标:&nbsp; x: {{ selectedData.left }}, y: {{ selectedData.top }}</li>
      <li>文本框内容:&nbsp;<input v-model="selectedData.data"></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.right-panel {
  width: 300px;
}

.right-panel li {
  margin-bottom: 10px
}
</style>
