import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import productReducer from './products';

const RootReducer = combineReducers({
  products: productReducer
});

const store = configureStore({
  reducer: RootReducer,
  middleware: [thunk, logger],
});

export default store;
