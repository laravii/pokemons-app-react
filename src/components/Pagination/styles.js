import styled from 'styled-components';

import { RightArrow } from '@styled-icons/boxicons-solid/RightArrow';
import { LeftArrow } from '@styled-icons/boxicons-solid/LeftArrow';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

export const ButtonNext = styled(RightArrow)`
  width: 1.5rem;
  height: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonPrevious = styled(LeftArrow)`
  width: 1.5rem;
  height: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const PageButton = styled.div`
  display: flex;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 5px;
  &:hover {
    cursor: pointer;
  }
`;
