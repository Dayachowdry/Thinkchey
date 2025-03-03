import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import CategoryTabs from '../components/market/CategoryTabs';
import FilterBar from '../components/filters/FilterBar';
import MarketList from '../components/market/MarketList';
import { markets, categories } from '../data/markets';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const SubNav = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SubNavLink = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  background: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.light};
  color: ${({ active }) => active ? 'white' : 'inherit'};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  white-space: nowrap;
  font-weight: ${({ active }) => active ? '600' : '400'};

  &:hover {
    background: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.border};
  }
`;

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('list');

  const getFilteredMarkets = () => {
    let filteredMarkets = [];
    
    // Filter by category
    if (activeCategory === 'all') {
      Object.values(markets).forEach(categoryMarkets => {
        filteredMarkets = [...filteredMarkets, ...categoryMarkets];
      });
    } else {
      filteredMarkets = markets[activeCategory] || [];
    }
    
    // Filter by search term
    if (searchTerm) {
      filteredMarkets = filteredMarkets.filter(market => 
        market.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        market.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort markets
    switch (sortBy) {
      case 'trending':
        return filteredMarkets.sort((a, b) => parseFloat(b.volume) - parseFloat(a.volume));
      case 'newest':
        return filteredMarkets.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));
      case 'ending':
        return filteredMarkets.sort((a, b) => new Date(a.endDate) - new Date(b.endDate));
      default:
        return filteredMarkets;
    }
  };

  const subNavItems = [
    { id: 'all', label: 'All', icon: '🎯' },
    { id: 'new', label: 'New', icon: '🆕' },
    { id: 'breaking', label: 'Breaking News', icon: '📰' },
    { id: 'trump', label: 'Trump Presidency', icon: '🇺🇸' },
    { id: 'ukraine', label: 'Ukraine', icon: '🇺🇦' },
    { id: 'trade', label: 'Trade War', icon: '🌐' },
    { id: 'congress', label: 'Address to Congress', icon: '🏛️' },
  ];

  return (
    <Layout>
      <Container>
        <SubNav>
          {subNavItems.map(item => (
            <SubNavLink
              key={item.id}
              active={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon} {item.label}
            </SubNavLink>
          ))}
        </SubNav>

        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <FilterBar
          sortBy={sortBy}
          onSortChange={setSortBy}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        <MarketList markets={getFilteredMarkets()} />
      </Container>
    </Layout>
  );
};

export default HomePage;
