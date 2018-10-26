import React, { useState } from 'react';
import styled from 'styled-components';
import RepoCard from './RepoCard';
import { github } from '../resources';

const RepoGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export default function RepoList({ search }) {
  const { items: repos } = github.repos.read(search);
  const [activeRepo, setActiveRepo] = useState(null);

  return (
    <RepoGrid>
      {repos.map(repo => (
        <RepoCard
          key={repo.id}
          repo={repo}
          onClick={() =>
            console.log(repo.id === activeRepo) ||
            setActiveRepo(repo.id === activeRepo ? null : repo.id)
          }
          active={repo.id === activeRepo}
        />
      ))}
    </RepoGrid>
  );
}
