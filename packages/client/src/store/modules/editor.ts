import { EditorDataItem } from "@/api";
import { defineStore } from "pinia";

interface EditorState {
  // 已从后端接口中加载的组件信息
  editorDataList: EditorDataItem[];
  // 在画布编辑区中存放的组件
  canvasDataList: EditorDataItem[];
  // 当前选中的元素 会展示在右侧属性部分
  selectedData: EditorDataItem | null;
}

const initEditorStore = (): EditorState => {
  return {
    editorDataList: [],
    canvasDataList: [],
    selectedData: null,
  };
};

export const useEditorStore = defineStore("editor", {
  state: initEditorStore,
  getters: {
    getDataById: (state) => {
      return (id: number) =>
        state.editorDataList.find((item) => item.id === id);
    },
  },
  actions: {
    setEditorDataList(dataList: EditorDataItem[]) {
      this.editorDataList = dataList;
    },
    // 当有组件拖放到画布编辑区时 调用该 action
    addCanvasData(data: EditorDataItem) {
      this.canvasDataList.push(data);
    },
    setSelectedData(data: EditorDataItem) {
      this.selectedData = data;
    },
  },
});
