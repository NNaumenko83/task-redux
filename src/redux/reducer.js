import { combineReducers } from 'redux';
const { statusFilters } = require('./constants');

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return [...state, action.payload];

    case 'tasks/deleteTask':
      return state.filter(task => action.payload !== task.id);
    case 'tasks/toggleCompleted':
      return state.map(task => {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          return task;
        }
        return task;
      });
    default:
      return state;
  }
};

const filterInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setStatusFilter':
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
