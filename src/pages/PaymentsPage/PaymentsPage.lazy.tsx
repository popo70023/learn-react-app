import React, { lazy, Suspense } from 'react';

const LazyPaymentsPage = lazy(() => import('./PaymentsPage'));

const PaymentsPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPaymentsPage {...props} />
  </Suspense>
);

export default PaymentsPage;
