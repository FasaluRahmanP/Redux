import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';
import counterSlice from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },

});
