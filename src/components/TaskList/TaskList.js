import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';
import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { getStatusFilter } from 'redux/selectors';
import { useQuery } from '@tanstack/react-query';
import { getTasks } from 'services/api';

const getVisibleTasks = (tasks = [], statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);

    case statusFilters.completed:
      return tasks.filter(task => task.completed);

    default:
      return tasks;
  }
};

export const TaskList = () => {
  const query = useQuery({ queryKey: ['tasks'], queryFn: getTasks });

  const statusFilter = useSelector(getStatusFilter);

  const visibleTasks = getVisibleTasks(query.data, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
