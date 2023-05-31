import { useSelector } from 'react-redux';
import css from './TaskCounter.module.css';
import { getTasks } from 'redux/selectors';

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (!task.completed) {
        acc.active += 1;
      } else {
        acc.completed += 1;
      }
      return acc;
    },

    { active: 0, completed: 0 }
  );
  console.log('count:', count);

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
