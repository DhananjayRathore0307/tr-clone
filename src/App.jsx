import React, { useEffect, useState } from "react";
import BoardView from "./components/BoardView";
import { v4 as uuid } from "uuid";

function App() {
  const [boards, setBoards] = useState(() => {
    const saved = localStorage.getItem("boards");
    return saved ? JSON.parse(saved) : [
      { id: uuid(), title: "Project Board", tasks: [] }
    ];
  });

  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  const addTask = () => {
    const boardId = boards[0].id;
    const title = prompt("Task title");
    if (!title) return;

    const description = prompt("Description:");
    const priority = prompt("Priority (Low/Medium/High):", "Medium");
    const assignedTo = prompt("Assigned to:");
    const dueDate = prompt("Due date (YYYY-MM-DD):", new Date().toISOString().slice(0, 10));

    const newTask = {
      id: uuid(),
      title,
      description,
      status: "To Do",
      priority,
      assignedTo,
      dueDate
    };

    const updatedBoards = boards.map(b =>
      b.id === boardId ? { ...b, tasks: [...b.tasks, newTask] } : b
    );

    setBoards(updatedBoards);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Trello Clone</h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          + Add Task
        </button>
      </div>
      <BoardView board={boards[0]} setBoards={setBoards} />
    </div>
  );
}

export default App;
