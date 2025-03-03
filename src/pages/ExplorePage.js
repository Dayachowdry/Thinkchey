import React, { useState } from 'react';
import styled from 'styled-components';
import MarketCard from '../components/market/MarketCard';
import { markets, categories } from '../data/markets';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }
`;

const CategoryTab = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: none;
  background: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.light};
  color: ${({ active, theme }) => active ? 'white' : theme.colors.textSecondary};
  font-weight: 500;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.medium};
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const MarketsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NoResults = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ExplorePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const getFilteredMarkets = () => {
    let filteredMarkets = [];
    
    if (activeCategory === 'all') {
      Object.values(markets).forEach(categoryMarkets => {
        filteredMarkets = [...filteredMarkets, ...categoryMarkets];
      });
    } else {
      filteredMarkets = markets[activeCategory] || [];
    }
    
    if (searchTerm) {
      return filteredMarkets.filter(market => 
        market.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        market.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filteredMarkets;
  };

  return (
    <Container>
      <Header>
        <Title>Explore Markets</Title>
        <Subtitle>Discover and trade on the most exciting predictions in India</Subtitle>
      </Header>

      <CategoryTabs>
        <CategoryTab
          active={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}
        >
          🎯 All Markets
        </CategoryTab>
        {categories.map(category => (
          <CategoryTab
            key={category.id}
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon} {category.name}
          </CategoryTab>
        ))}
      </CategoryTabs>

      <SearchInput
        type="text"
        placeholder="Search markets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <MarketsGrid>
        {getFilteredMarkets().map(market => (
          <MarketCard key={market.id} market={market} />
        ))}
      </MarketsGrid>

      {getFilteredMarkets().length === 0 && (
        <NoResults>
          No markets found. Try adjusting your search or filters.
        </NoResults>
      )}
    </Container>
  );
};

export default ExplorePage;
