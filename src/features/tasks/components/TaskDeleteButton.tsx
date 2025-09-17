import { useNavigate } from "react-router";
import { deleteTask } from "../hooks/deleteTask";
import styles from "../styles/taskDetail.module.css"

type Props = {
  id?: string;
};

export default function TaskDeleteButton({ id }: Props) {
  const navigate = useNavigate();

  const handleChange = async () => {
    if(!id) return
    const result = window.confirm("本当に削除しますか？");
    if (result) {
      await deleteTask(id);
      navigate("/tasks");
    }
  };

  return (
    <button onClick={handleChange} className={styles.taskDeleteBtn}>
      削除
    </button>
  )
}