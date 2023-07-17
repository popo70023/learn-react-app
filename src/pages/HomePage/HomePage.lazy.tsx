import { lazy, Suspense } from 'react';

const LazyHomePage = lazy(async () => await import('./HomePage'));

const HomePage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }): JSX.Element => (
  <Suspense fallback={null}>
    <LazyHomePage {...props} />
  </Suspense>
);

export default HomePage;
