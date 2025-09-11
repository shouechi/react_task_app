import { Task } from "../../../types/task";

export const mockTasks: Task[] = [
  {
    id: 1,
    title: "ユーザー認証機能の不具合修正",
    description: "ユーザーがログイン時に、不正なトークンエラーが発生する問題を修正します。",
    status: false,
    priority: "high",
    dueDate: "2025-03-31",
    createdAt: "2025-02-17T10:00:00Z",
    updatedAt: "2025-02-17T10:00:00Z",
  },
  {
    id: 2,
    title: "タスク一覧表示のパフォーマンス改善",
    description: "タスク一覧ページで、タスクが大量にある場合の表示遅延を改善します。不要な再レンダリングを防ぐため、コンポーネントの最適化を実施してください。",
    status: false,
    priority: "medium",
    dueDate: "2025-04-15",
    createdAt: "2025-02-17T10:00:00Z",
    updatedAt: "2025-02-17T10:00:00Z",
  },
  {
    id: 3,
    title: "新規タスク作成画面のUI改善",
    description: "新規タスク作成画面の入力フォームのユーザビリティ向上を図ります。エラーメッセージの明示化や、入力フィールドのデザインを改善してください。",
    status: false,
    priority: "low",
    dueDate: "2025-05-01",
    createdAt: "2025-02-17T10:00:00Z",
    updatedAt: "2025-02-17T10:00:00Z",
  },
];