import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTask, toggleCompleted } from 'services/api';
import { useTasks } from 'hooks/useTasks';

export const Task = ({ task }) => {
  const { isFetching } = useTasks();
  const queryClient = useQueryClient();

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const toggleCompletedMutation = useMutation({
    mutationFn: toggleCompleted,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const handleDelete = () => {
    deleteTaskMutation.mutate(task.id);
  };

  const handleToggle = () => {
    toggleCompletedMutation.mutate(task);
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
        disabled={isFetching}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete} disabled={isFetching}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
