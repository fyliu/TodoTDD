import React from "react";
import { TaskItem, TaskListItem } from "./TaskListItem";

type Props = {
  tasks: TaskItem[];
};

export const TaskList: React.FC<Props> = ({ tasks }) => (
  <>
    {tasks.length === 0 ? (
      "No tasks have been added yet."
    ) : (
      <div>
        {tasks.map((task) => (
          <TaskListItem date={task.date} title={task.title} />
        ))}
      </div>
    )}
  </>
);
