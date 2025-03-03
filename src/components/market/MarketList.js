import React from 'react';
import styled from 'styled-components';
import MarketListItem from './MarketListItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const MarketList = ({ markets }) => {
  return (
    <Container>
      {markets.map(market => (
        <MarketListItem key={market.id} market={market} />
      ))}
    </Container>
  );
};

export default MarketList;
