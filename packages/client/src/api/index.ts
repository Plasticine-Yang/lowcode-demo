import { http } from "@/service";

export interface EditorDataItem {
  id: number;
  type: string;
  data: string;
  color: string;
  size: string;
  width: string;
  height: string;
  left: string;
  top: string;
}

/**
 * @description 获取组件信息列表
 */
export const getDataList = () => {
  return http.get<{ data: EditorDataItem[] }>("/list");
};
