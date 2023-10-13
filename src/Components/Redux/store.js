// store.js
import { createStore, combineReducers } from 'redux';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer, // Ensure that themeReducer is included in the rootReducer
});

const store = createStore(rootReducer);


export default store;
