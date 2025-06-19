import API from './api';

export const getTasks = async () => API.get('/tasks');
export const addTask = async (task) => API.post('/tasks', task);
export const updateTask = async (id, updates) => API.put(`/tasks/${id}`, updates);
export const deleteTask = async (id) => API.delete(`/tasks/${id}`);
