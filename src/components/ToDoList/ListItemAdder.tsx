import { useState } from 'react';
import { Button, Input } from 'antd';
import styles from "./todolist.module.scss";

interface ListItemAdderProps {
  onAddItem: (newItem: string) => void;
}

export default function ListItemAdder({ onAddItem }: ListItemAdderProps) {
  const [inputValue, setInputValue] = useState('');

  const Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const AddItem = () => {
    if (inputValue.trim() !== '') {
      onAddItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className={styles.listitemaddercontainer}>
      <Input
        className={styles.additeminput}
        type="text"
        value={inputValue}
        onChange={Change}
        placeholder="Add new item"
      />
      <Button className={styles.additembutton} type="primary" onClick={AddItem}>Add</Button>
    </div>
  );
}
