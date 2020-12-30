import React from 'react';

import { Container, ButtonNext, ButtonPrevious, PageButton } from './styles';

export const Pagination = ({ pagesTotal, active, setActive }) => {
  let arr = [];
  const Page = (num) => {
    for (let value = 1; value <= num; value++) {
      arr.push(value);
    }
    return arr.map((numBtn) => (
      <PageButton
        isActive={numBtn === active}
        onClick={(e) => setActive(numBtn)}
        key={String(Math.random())}>
        {numBtn}
      </PageButton>
    ));
  };

  return (
    <Container>
      <ButtonPrevious
        onClick={(e) => (active === 1 ? null : setActive(active - 1))}
      />
      {Page(pagesTotal)}
      <ButtonNext
        onClick={(e) => (active === pagesTotal ? null : setActive(active + 1))}
      />
    </Container>
  );
};
