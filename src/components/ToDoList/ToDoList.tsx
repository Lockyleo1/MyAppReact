import {useState, useEffect } from 'react';
import ToDoListItem from './ToDoListItem';
import ListItemAdder from './ListItemAdder';
import { Button } from 'antd';
import styles from "./todolist.module.scss";

export default function ToDoList() {
  const [items, setItems] = useState<string[]>([]);

  const Delete = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const AddItem = (newItem: string) => {
    setItems([...items, newItem]);
  };

  const Reset = () => {
    setItems([]);
  };

  useEffect(() => {
    console.log("Lista aggiornata:", items);
  }, [items]);

  return (
    <div className={styles.todolistcontainer}>
      <h1>To Do List</h1>
      <div className={styles.buttonContainer}>
        <ListItemAdder onAddItem={AddItem} />
        <Button className={styles.resetbutton} type="primary" onClick={Reset}>Reset</Button>
      </div>
      <div className={styles.todolist}>
        {items.map((item, index) => (
          <ToDoListItem
            key={index}
            item={item}
            index={index}
            onDelete={Delete}
          />
        ))}
      </div>
    </div>
  );
}
