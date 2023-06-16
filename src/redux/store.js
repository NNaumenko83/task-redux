import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';

const { createStore } = require('redux');

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
