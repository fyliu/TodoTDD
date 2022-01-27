import React, { useState } from "react";
import { TaskItem } from "./TaskListItem";

type Props = {
  onSubmit: (taskItem: TaskItem) => void;
  onCancel: () => void;
};

export const AddTaskModal: React.FC<Props> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");

  const onSubmitHandler = () => {
    onSubmit({ title: title, date: new Date().toDateString() });
    setTitle("");
  };

  const onCancelHandler = () => {};

  const onKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {};

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="Task Title">Task Title</label>
      <input
        id="Task Title"
        name="Task Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Task Title"
      />
      <button disabled={!title}>Submit</button>
      <button onCancel={onCancelHandler}>Cancel</button>
    </form>
  );
};
