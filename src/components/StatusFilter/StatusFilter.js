import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { statusFilters, getStatusFilter, setStatusFilter } from '../../redux/';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleStatusFilter = value => dispatch(setStatusFilter(value));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleStatusFilter(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleStatusFilter(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleStatusFilter(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
