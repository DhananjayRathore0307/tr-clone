import React, { useState } from "react";

function TaskCard({ task, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(task);

  const save = () => {
    onUpdate(task.id, form);
    setEditing(false);
  };

  return (
    <div className="bg-gray-100 p-3 rounded-md mb-3 text-sm shadow-sm">
      {editing ? (
        <div className="space-y-1">
          <input
            className="border p-1 w-full"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            className="border p-1 w-full"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
          <select
            className="border p-1 w-full"
            value={form.status}
            onChange={e => setForm({ ...form, status: e.target.value })}
          >
            <option className="flex justify-center mb-4">To Do</option>
            <option className="progress">In Progress</option>
            <option className="done">Done</option>
          </select>
          <div className="flex justify-between">
            <button onClick={save} className="text-green-600 text-xs">Save</button>
            <button onClick={() => setEditing(false)} className="text-gray-600 text-xs">Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <div className="font-medium">{task.title}</div>
          <div className="text-xs text-gray-700">{task.description}</div>
          <div className="text-xs text-gray-500">Priority: {task.priority}</div>
          <div className="text-xs text-gray-500">Assigned: {task.assignedTo}</div>
          <div className="text-xs text-gray-500">Due: {task.dueDate}</div>
          <div className="flex justify-between mt-2">
            <button onClick={() => setEditing(true)} className="text-blue-600 text-xs">Edit</button>
            <button onClick={() => onDelete(task.id)} className="text-red-600 text-xs">Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskCard;
