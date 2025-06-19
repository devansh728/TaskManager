import React from 'react';

export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition w-full disabled:opacity-50"
    >
      {children}
    </button>
  );
}
