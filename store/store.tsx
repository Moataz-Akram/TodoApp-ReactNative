import {configureStore} from '@reduxjs/toolkit';
import todosReducer from '../model/TodoState';

export const todoStore = configureStore({
  reducer: {todosReducer},
});

export type RootState = ReturnType<typeof todoStore.getState>;

export type AppDispatch = typeof todoStore.dispatch;
