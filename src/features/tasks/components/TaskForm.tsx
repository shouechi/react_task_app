import { TaskFormData } from "../../../types/task";
import styles from "../styles/taskForm.module.css";

type Props = {
  formData: TaskFormData; //フォームデータをTaskFrom型で受け取る。
  onChange: (
    e: React.ChangeEvent <
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void; //入力が変更された時に呼ばれる関数の型
  onSubmit: (e :React.FormEvent<HTMLFormElement>) => void; //フォームが送信される時に呼ばれる関数の型
  id?: string;
};

export default function TaskForm ({formData, onChange, onSubmit, id}: Props) {
  return (
    <form onSubmit={onSubmit} className={styles.fomr}>
      <div className={styles.formGroup}>
        <label>タスク名 : </label>
        <input 
          type="text"
          name="title"
          value={formData.title}
          onChange={onChange}
          required
           />
      </div>
      <div className={styles.formGroup}>
        <label>説明：</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>優先度：</label>
        <select name="priority" value={formData.priority} onChange={onChange}>
          <option value="high">高</option>
          <option value="medium">中</option>
          <option value="low">低</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>期限日：</label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        {id ? "更新する" : "作成する"}
      </button>
    </form>
  );
}