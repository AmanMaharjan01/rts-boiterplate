import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";

const ExamplePage = React.lazy(() => import("pages/@module/ExamplePage"))

export default function Route() {
    return useRoutes([
      {
        path: '/',
        element: <SuspenseComponent><ExamplePage /></SuspenseComponent>
       
      },
    ]);
  }


  const SuspenseComponent = ({children} : {
    children: React.ReactNode
  }) => (
    <Suspense fallback={<div>loading...</div>}>
      {children}
    </Suspense>
  )