import React, { Suspense } from 'react';
import RepoList from './components/RepoList';
import { useDebouncedState } from './hooks';

export default () => {
  const [search, setSearch] = useDebouncedState('react', 750);
  return (
    <>
      <input
        type="text"
        defaultValue={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Suspense fallback={'loading'}>
        {search && <RepoList search={search} />}
      </Suspense>
    </>
  );
};
