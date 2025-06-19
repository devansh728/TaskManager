import React from 'react';

export default function TaskItem({ task, onEdit, onDelete, onToggle }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-2 p-4 mb-3 rounded shadow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition ${task.completed ? 'opacity-60 line-through' : ''}`}
    >
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-1">{task.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-1">{task.description}</p>
        <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
          Status: {task.completed ? 'Completed' : 'Incomplete'}
        </span>
      </div>
      <div className="flex gap-2 mt-2 md:mt-0">
        <button
          onClick={() => onToggle(task)}
          className="px-2 py-1 rounded bg-green-500 text-white hover:bg-green-600 text-xs"
        >
          {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button
          onClick={() => onEdit(task)}
          className="px-2 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600 text-xs"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600 text-xs"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
