import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://641b2a469b82ded29d4bddd7.mockapi.io';

// export const fetchTasks = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get('/tasks');
//     dispatch(fetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchingError(error.message));
//   }
// };

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/tasks');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      const res = await axios.post('/tasks', { text });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const res = await axios.delete(`/tasks/${taskId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  'tasks/toggleCompleted',
  async (task, thunkAPI) => {
    try {
      const res = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
