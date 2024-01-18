import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer, tasksReducer } from '../redux';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
