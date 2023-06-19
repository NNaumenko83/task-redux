import { Button } from 'components/Button/Button';
import css from './TaskForm.module.css';

import { addTask } from 'services/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTasks } from 'hooks/useTasks';
import { RotatingLines } from 'react-loader-spinner';

export const TaskForm = () => {
  const queryClient = useQueryClient();
  const { isFetching } = useTasks();
  console.log('isFetching:', isFetching);

  const deleteTAskMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const task = form.elements.text.value;
    deleteTAskMutation.mutate(task);
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit" disabled={isFetching}>
        {isFetching ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="15"
            visible={true}
          />
        ) : (
          'Add task'
        )}
      </Button>
    </form>
  );
};
