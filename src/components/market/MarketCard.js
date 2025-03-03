import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: ${({ theme }) => theme.transitions.medium};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const Category = styled.span`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Volume = styled.span`
  color: ${({ theme }) => theme.colors.success};
  font-weight: 500;
`;

const PriceContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const PriceBox = styled.div`
  flex: 1;
  background: ${({ theme, type }) =>
    type === 'yes' ? theme.colors.successLight : theme.colors.dangerLight};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  text-align: center;
`;

const PriceLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme, type }) => (type === 'yes' ? theme.colors.success : theme.colors.danger)};
`;

const MarketCard = ({ market }) => {
  return (
    <Card to={`/market/${market.id}`}>
      <Title>{market.title}</Title>
      <Description>{market.description}</Description>
      <PriceContainer>
        <PriceBox type="yes">
          <PriceLabel>Yes</PriceLabel>
          <Price type="yes">₹{market.yesPrice.toFixed(2)}</Price>
        </PriceBox>
        <PriceBox type="no">
          <PriceLabel>No</PriceLabel>
          <Price type="no">₹{market.noPrice.toFixed(2)}</Price>
        </PriceBox>
      </PriceContainer>
      <MetaData>
        <Category>{market.category}</Category>
        <Volume>Vol: {market.volume}</Volume>
      </MetaData>
    </Card>
  );
};

MarketCard.propTypes = {
  market: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
    yesPrice: PropTypes.number.isRequired,
    noPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default MarketCard;
