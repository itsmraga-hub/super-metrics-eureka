import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import stockSlice from './reducers/stocks';

const rootReducer = combineReducers({
  stocks: stockSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
