import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onEdit, onDelete, onToggle }) {
  if (!tasks.length) return <p className="text-center text-gray-500 dark:text-gray-300">No tasks found.</p>;
  return (
    <div className="task-list w-full max-w-2xl mx-auto mt-6">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
