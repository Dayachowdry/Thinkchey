import React from 'react';
import PropTypes from 'prop-types';
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

MarketList.propTypes = {
  markets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      volume: PropTypes.string.isRequired,
      yesPrice: PropTypes.number.isRequired,
      noPrice: PropTypes.number.isRequired,
      icon: PropTypes.string,
      endDate: PropTypes.string,
    })
  ).isRequired,
};

export default MarketList;
