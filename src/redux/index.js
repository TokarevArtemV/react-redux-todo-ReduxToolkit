export { statusFilters } from '../redux/constants';
export { setStatusFilter, filtersReducer } from '../redux/filterSlice';
export {
  addTask,
  deleteTask,
  toggleCompleted,
  tasksReducer,
} from '../redux/tasksSlice';

export { getStatusFilter, getTasks } from '../redux/selectors';
export { store } from '../redux/store';
