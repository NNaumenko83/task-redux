const { nanoid } = require('nanoid');

export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: { id: nanoid(), completed: false, text },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    action: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return { type: 'filter/setStatusFilter', payload: value };
};
