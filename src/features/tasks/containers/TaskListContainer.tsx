import { useEffect, useState } from "react";
import { getTasks } from "../hooks/getTasks";
import { Task } from "../../../types/task";
import TaskCard from "../components/TaskCard";
import styles from "../styles/TaskListContainer.module.css";
import { Link } from "react-router-dom";
import { updateTask } from "../hooks/updateTask";


export default function TaskListContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);

  //タスク一覧を取得する関数
  const feachTasks = async () => {
    const feachedTasks = await getTasks();
    setTasks(feachedTasks);
  };

  useEffect(() => {
    feachTasks();
  }, []);

  //セレクトボックスで変更されたステータスを更新する処理
  const handleToggleStatus = async (taskId: Task['id'], newStatus: boolean) => {
    await updateTask(String(taskId), { status: newStatus });
    feachTasks();
  }

  return (
    <div className={styles.container}>
      <h1>タスク一覧</h1>
      <div className={styles.taskListHeader}>  {/* タスク作成ページへのリンクを追加 */}
        <Link to="/tasks/new" className={styles.newTaskLink}>
          新規作成
        </Link>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.header}>
          <div>タスク名</div>
          <div>ステータス</div>
          <div>優先度</div>
          <div>期限日</div>
        </div>
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskCard 
              key={task.id} 
              task={task}
              onToggleStatus={handleToggleStatus} />
          ))}
        </div>
      </div>
    </div>
  );
}
