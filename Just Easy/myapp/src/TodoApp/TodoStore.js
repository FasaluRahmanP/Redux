import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../TodoApp/TodoSlice"; 

export const Todostore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
