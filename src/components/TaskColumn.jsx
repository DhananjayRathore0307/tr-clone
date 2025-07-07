import React from "react";
import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks, onUpdate, onDelete }) {
  return (
    <div className="bg-white w-72 rounded-xl shadow p-3">
      <h2 className="font-semibold text-lg mb-3 text-blue-600">{title}</h2>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskColumn;
