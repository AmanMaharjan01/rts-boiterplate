import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

const ExamplePage = React.lazy(async () => await import('pages/@example/ExamplePage'));

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: (
        <SuspenseComponent>
          <ExamplePage />
        </SuspenseComponent>
      ),
    },
  ]);
}

const SuspenseComponent = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
);
