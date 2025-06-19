import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getTasks, addTask, updateTask, deleteTask } from '../services/taskService';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function DashboardPage() {
  const { state, dispatch } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [error, setError] = useState('');
  const { values, handleChange, reset, setValues } = useForm({ title: '', description: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.accessToken) {
      navigate('/login');
      return;
    }
    fetchTasks();
    // eslint-disable-next-line
  }, [state.accessToken]);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      setError('Failed to fetch tasks');
      toast.error('Failed to fetch tasks');
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addTask(values);
      reset();
      fetchTasks();
      toast.success('Task added!');
    } catch (err) {
      setError('Failed to add task');
      toast.error('Failed to add task');
    }
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setValues({ title: task.title, description: task.description });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateTask(editTask._id, { ...values });
      setEditTask(null);
      reset();
      fetchTasks();
      toast.success('Task updated!');
    } catch (err) {
      setError('Failed to update task');
      toast.error('Failed to update task');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
      toast.success('Task deleted!');
    } catch (err) {
      setError('Failed to delete task');
      toast.error('Failed to delete task');
    }
  };

  const handleToggle = async (task) => {
    try {
      await updateTask(task._id, { completed: !task.completed });
      fetchTasks();
      toast.success('Task status updated!');
    } catch (err) {
      setError('Failed to update status');
      toast.error('Failed to update status');
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login');
    toast('Logged out', { icon: '👋' });
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 p-4 w-full">
      <Toaster position="top-center" />
      <motion.div
        className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 
                   bg-white dark:bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-xl shadow-2xl z-10 mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-white">Dashboard</h2>
          <button
            onClick={handleLogout}
            className="px-6 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-300 text-lg shadow-md"
          >
            Logout
          </button>
        </div>
        <TaskForm
          values={values}
          onChange={handleChange}
          onSubmit={editTask ? handleUpdate : handleAdd}
          isEdit={!!editTask}
        />
        {error && <p className="error text-red-500 mt-4 text-center text-sm">{error}</p>}
        <TaskList
          tasks={tasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      </motion.div>
    </div>
  );
}
