import React from "react";
import TaskColumn from "./TaskColumn";

const statuses = ["To Do", "In Progress", "Done"];

function BoardView({ board, setBoards }) {
  const updateTask = (taskId, updatedFields) => {
    const updatedTasks = board.tasks.map(task =>
      task.id === taskId ? { ...task, ...updatedFields } : task
    );
    setBoards(prev =>
      prev.map(b => (b.id === board.id ? { ...b, tasks: updatedTasks } : b))
    );
  };

  const deleteTask = (taskId) => {
    const filtered = board.tasks.filter(task => task.id !== taskId);
    setBoards(prev =>
      prev.map(b => (b.id === board.id ? { ...b, tasks: filtered } : b))
    );
  };

  return (
    <div className="flex gap-4 overflow-x-auto">
      {statuses.map(status => (
        <TaskColumn
          key={status}
          title={status}
          tasks={board.tasks.filter(task => task.status === status)}
          onUpdate={updateTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}

export default BoardView;
