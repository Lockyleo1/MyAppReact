import { Button } from 'antd';
import styles from "./todolist.module.scss";

interface ToDoListItemProps {
  item: string;
  index: number;
  onDelete: (index: number) => void;
}

export default function ToDoListItem({ item, index, onDelete }: ToDoListItemProps) {
  const Delete = () => {
    onDelete(index);
  };

  return (
    <div className={styles.todolistitemcontainer}>
      <div className={styles.todolistitemtext}>
        <span className={styles.todoitem}>{item}</span>
      </div>
      <Button type="default" className={styles.deletebutton} onClick={Delete}>X</Button>
    </div>
  );
}
  