import axios from 'axios';

axios.defaults.baseURL = 'https://641b2a469b82ded29d4bddd7.mockapi.io';

export const getTasks = async () => {
  try {
    const res = await axios.get('/tasks');
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const addTask = async text => {
  try {
    const res = await axios.post('/tasks', { text });
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const deleteTask = async taskId => {
  try {
    const res = await axios.delete(`/tasks/${taskId}`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const toggleCompleted = async task => {
  try {
    const res = await axios.put(`/tasks/${task.id}`, {
      completed: !task.completed,
    });
    return res.data;
  } catch (error) {
    return error.message;
  }
};
