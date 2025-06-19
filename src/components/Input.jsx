import React from 'react';

export default function Input({ label, ...props }) {
  return (
    <div className="mb-4 w-full">
      {label && <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>}
      <input
        {...props}
        className="input w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
      />
    </div>
  );
}
