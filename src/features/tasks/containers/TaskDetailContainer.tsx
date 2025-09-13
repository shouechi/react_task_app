import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTaskById } from "../hooks/getTaskById";
import { Task } from "../../../types/task";
import TaskDetail from "../components/TaskDetail";
import style from "../styles/taskDetail.module.css";

export default function TaskDeatilContainer() {
  const { id } = useParams<{ id?: string }>();
  const[task, setTask] = useState<Task |null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchTask() {
      const fetchedTask = await getTaskById(id);
      setTask(fetchedTask ?? null);
    }
    fetchTask();
  }, [id]);

  if(!task) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "300px",
        }}
      >
        読み込み中...
      </div>
    )
  }

  return (
    <div className={style.TaskDeatilContainer}>
      <TaskDetail task={task} />
    </div>
  )
}