// import { devToolsEnhancer } from '@redux-devtools/extension';

import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer, filtersReducer } from './reducer';

// const { createStore } = require('redux');

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
  reducer: { tasks: tasksReducer, filters: filtersReducer },
});
