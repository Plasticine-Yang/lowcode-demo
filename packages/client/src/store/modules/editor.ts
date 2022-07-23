import { EditorDataItem } from "@/api";
import { defineStore } from "pinia";

// 每个被选中的组件都需要带有tag
type SelectedData = EditorDataItem & {tag:string}
interface EditorState {
  // 已从后端接口中加载的组件信息
  editorDataList: EditorDataItem[];
  // 在画布编辑区中存放的组件
  canvasDataList: SelectedData[];
  // 当前选中的元素 会展示在右侧属性部分
  selectedData: SelectedData | null;
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
    getDataByTag: (state) => {
      return (tag: string) => 
        state.canvasDataList.find((item) => item.tag === tag)
      
    },
  },
  actions: {
    setEditorDataList(dataList: EditorDataItem[]) {
      this.editorDataList = dataList;
    },
    // 当有组件拖放到画布编辑区时 调用该 action
    addCanvasData(data: SelectedData) {
      // 更新 pinia 状态
      this.canvasDataList.push(data);
    },
    setSelectedData(data: SelectedData) {
      this.selectedData = data;
    },
  },
});
