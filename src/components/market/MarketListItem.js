import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  color: inherit;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

const MarketImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
`;

const MarketInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Metadata = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Tag = styled.span`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-left: auto;
`;

const PriceButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  min-width: 100px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ type, theme }) => type === 'yes' ? theme.colors.successLight : theme.colors.dangerLight};
  color: ${({ type, theme }) => type === 'yes' ? theme.colors.success : theme.colors.danger};
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

const Chance = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const MarketListItem = ({ market }) => {
  const getChance = () => {
    return Math.max(market.yesPrice, market.noPrice);
  };

  return (
    <Container to={`/market/${market.id}`}>
      <MarketImage>
        {market.icon || '🎯'}
      </MarketImage>
      
      <MarketInfo>
        <Title>{market.title}</Title>
        <Metadata>
          <Tag>{market.category}</Tag>
          <span>•</span>
          <span>Vol: {market.volume}</span>
          {market.endDate && (
            <>
              <span>•</span>
              <span>Ends: {new Date(market.endDate).toLocaleDateString()}</span>
            </>
          )}
        </Metadata>
      </MarketInfo>

      <PriceInfo>
        <PriceButton type="yes">
          Yes ₹{market.yesPrice}
        </PriceButton>
        <PriceButton type="no">
          No ₹{market.noPrice}
        </PriceButton>
        <Chance>{getChance()}% chance</Chance>
      </PriceInfo>
    </Container>
  );
};

export default MarketListItem;
