export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: Math.random(),
      text,
      completed: false,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const toggleCompeted = taskId => {
  return {
    type: 'tasks/toggleCompeted',
    payload: taskId,
  };
};

export const setStatusFilter = status => {
  return {
    type: 'filters/setStatusFilter',
    payload: status,
  };
};
