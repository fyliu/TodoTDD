import React, { useState } from "react";
import { AddTaskModal } from "./components/AddTaskModal";
import { TaskItem, TaskListItem } from "./components/TaskListItem";

export default function App() {
  const [hideAddTask, setHideAddTask] = useState(false);
  const [taskList, setTaskList] = useState<TaskItem[] | never[]>([]);

  const addTaskHandler = (taskItem: TaskItem) => {
    setHideAddTask(false);
    setTaskList((prev) => {
      return [...prev, taskItem];
    });
  };

  return (
    <>
      Task Tracker
      {hideAddTask ? (
        <AddTaskModal
          onSubmit={addTaskHandler}
          onCancel={() => {
            setHideAddTask(false);
          }}
        />
      ) : (
        <button onClick={() => setHideAddTask(true)}>Add Task</button>
      )}
      {taskList.map((task) => (
        <TaskListItem title={task.title} date={task.date} />
      ))}
    </>
  );
}
