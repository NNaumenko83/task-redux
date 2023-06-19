import css from './TaskCounter.module.css';

import { useTasks } from 'hooks/useTasks';

export const TaskCounter = () => {
  const { data: tasks, isLoading, fetchStatus, isFetching } = useTasks();
  console.log('isFetching:', isFetching);

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
      {isFetching && <p>Fetching</p>}
      <p className={css.text}>
        Active: {isLoading ? <span>isLoading...</span> : count.active}
      </p>
      <p className={css.text}>
        Completed: {isLoading ? <span>isLoading...</span> : count.completed}
      </p>
    </div>
  );
};
