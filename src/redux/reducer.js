import { createReducer } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  setStatusFilter,
  toggleCompleted,
} from './actions';

// import { combineReducers } from 'redux';
const { statusFilters } = require('./constants');

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    state.push(action.payload);
  },

  [deleteTask]: (state, action) => {
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
  },

  [toggleCompleted]: (state, action) => {
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  },
});

const filterInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filterInitialState, {
  [setStatusFilter]: (state, action) => {
    state.status = action.payload;
  },
});

// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];

//     case deleteTask.type:
//       return state.filter(task => action.payload !== task.id);

//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id === action.payload) {
//           return { ...task, completed: !task.completed };
//         }
//         return task;
//       });
//     default:
//       return state;
//   }
// };

// export const filtersReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case setStatusFilter.type:
//       return { ...state, status: action.payload };

//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });
