import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

export const App = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <Layout>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
};
