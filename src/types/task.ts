export type Priority = "high" | "medium" | "low";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: boolean;       // true: 完了、false: 未完了
  priority: Priority;    // 優先度
  dueDate: string;       // 締切日
  createdAt: string;     // 作成日時
  updatedAt: string;     // 更新日時
}