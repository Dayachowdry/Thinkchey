import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.medium};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const CardLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  display: block;
`;

const CardContent = styled.div`
  padding: 1.25rem;
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.dark};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 3rem;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 3.9rem;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

const CardCategory = styled.span`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 500;
`;

const CardVolume = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ProgressContainer = styled.div`
  margin: 1rem 0;
`;

const ProgressTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ProgressBar = styled.div`
  height: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${({ percent }) => `${percent}%`};
  background: ${({ theme }) => theme.colors.primary};
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const OptionName = styled.span`
  font-weight: 500;
`;

const OptionPrice = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const CardDate = styled.div``;

const MarketCard = ({ market }) => {
  const { id, title, description, category, volume, endDate, resolution } = market;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const renderPrices = () => {
    if (resolution === 'Yes/No') {
      return (
        <ProgressContainer>
          <ProgressTitle>
            <span>Yes: ${market.yesPrice.toFixed(2)}</span>
            <span>No: ${market.noPrice.toFixed(2)}</span>
          </ProgressTitle>
          <ProgressBar>
            <ProgressFill percent={market.yesPrice * 100} />
          </ProgressBar>
        </ProgressContainer>
      );
    } else if (resolution === 'Multiple Choice' && market.options) {
      return (
        <OptionsContainer>
          {market.options.map((option, index) => (
            <OptionItem key={index}>
              <OptionName>{option.name}</OptionName>
              <OptionPrice>${option.price.toFixed(2)}</OptionPrice>
            </OptionItem>
          ))}
        </OptionsContainer>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardLink to={`/market/${id}`}>
        <CardContent>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>

          <CardMeta>
            <CardCategory>{category}</CardCategory>
            <CardVolume>Volume: ${volume}</CardVolume>
          </CardMeta>

          {renderPrices()}

          <CardFooter>
            <CardDate>Ends: {formatDate(endDate)}</CardDate>
            <span>{resolution}</span>
          </CardFooter>
        </CardContent>
      </CardLink>
    </Card>
  );
};

export default MarketCard;
