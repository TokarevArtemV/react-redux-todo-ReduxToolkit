import { createReducer } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  setStatusFilter,
  toggleCompleted,
} from './actions';
import { statusFilters } from './constants';

const tasksInitialState = {
  tasks: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
    { id: 5, text: 'Find work in IT with biggest salary', completed: false },
  ],
};

export const tasksReducer = createReducer(tasksInitialState, builder => {
  builder
    .addCase(addTask, (state, action) => {
      state.tasks.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      return { tasks: state.tasks.filter(task => task.id !== action.payload) };
    })
    .addCase(toggleCompleted, (state, action) => {
      return {
        tasks: state.tasks.map(task => {
          if (task.id !== action.payload) {
            return task;
          }
          return { ...task, completed: !task.completed };
        }),
      };
    });
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, builder => {
  builder.addCase(setStatusFilter, (state, action) => {
    state.status = action.payload;
  });
});
