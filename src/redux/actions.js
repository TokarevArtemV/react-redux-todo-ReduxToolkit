import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      id: Math.random(),
      text,
      completed: false,
    },
  };
});
export const deleteTask = createAction('tasks/deleteTask');
export const toggleCompleted = createAction('tasks/toggleCompeted');
export const setStatusFilter = createAction('filters/setStatusFilter');
