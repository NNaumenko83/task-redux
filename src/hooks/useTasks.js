import { useQuery } from '@tanstack/react-query';
import { getTasks } from 'services/api';

export function useTasks() {
  return useQuery({ queryKey: ['tasks'], queryFn: getTasks });
}