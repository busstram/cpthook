import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const _Wrapper = posed.div({
  active: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flip: true,
    width: '70vw',
    height: '80vh',
  },
  inactive: {
    position: 'initial',
    top: 'initial',
    left: 'initial',
    bottom: 'initial',
    right: 'initial',
    flip: true,
    width: '120px',
    height: '80px',
  },
});

const Wrapper = styled(_Wrapper)`
  text-align: center;
  box-shadow: 0px 5px 17px 0px #c3c3c3;
  border-radius: 4px;
  margin: 8px;
  user-select: none;
  background: white;

  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.h3`
  font-size: 14px;
`;

export default function RepoCard({ repo, active, ...props }) {
  return (
    <Wrapper
      pose={active ? 'active' : 'inactive'}
      className={active ? 'active' : ''}
      {...props}
    >
      <Name>{repo.name}</Name>
    </Wrapper>
  );
}
