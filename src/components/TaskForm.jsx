import React from 'react';
import Input from './Input';
import Button from './Button';

export default function TaskForm({ values, onChange, onSubmit, isEdit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="task-form w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded shadow mb-6 flex flex-col gap-4"
    >
      <Input
        label="Title"
        name="title"
        value={values.title}
        onChange={onChange}
        required
      />
      <Input
        label="Description"
        name="description"
        value={values.description}
        onChange={onChange}
      />
      <Button type="submit">{isEdit ? 'Update' : 'Add'} Task</Button>
    </form>
  );
}
