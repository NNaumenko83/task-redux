import css from './TaskCounter.module.css';
import { RotatingLines } from 'react-loader-spinner';

import { useTasks } from 'hooks/useTasks';

export const TaskCounter = () => {
  const { data: tasks, isFetching } = useTasks();

  let count = {};
  if (tasks) {
    count = tasks.reduce(
      (acc, task) => {
        if (task.completed) {
          acc.completed += 1;
        } else {
          acc.active += 1;
        }
        return acc;
      },
      {
        active: 0,
        completed: 0,
      }
    );
  }

  return (
    <div>
      <p className={css.text}>
        Active:{' '}
        {isFetching ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="15"
            visible={true}
          />
        ) : (
          count.active
        )}
      </p>
      <p className={css.text}>
        Completed:{' '}
        {isFetching ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="15"
            visible={true}
          />
        ) : (
          count.completed
        )}
      </p>
    </div>
  );
};
