import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

// Components
import MarketCard from '../components/market/MarketCard';

const ExploreContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const ExploreHeader = styled.div`
  margin-bottom: 2rem;
`;

const ExploreTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ExploreSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

const FilterLabel = styled.label`
  margin-right: 0.5rem;
  font-weight: 500;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 0.5rem;
  }
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: white;
  min-width: 150px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  padding-left: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const MarketsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

// Mock data for markets
const allMarkets = [
  {
    id: 1,
    title: 'Will Bitcoin Reach $100k by End of 2025?',
    description: 'This market predicts whether Bitcoin will reach $100,000 USD by December 31, 2025.',
    category: 'Crypto',
    volume: '1.5M',
    endDate: '2025-12-31',
    resolution: 'Yes/No',
    yesPrice: 0.67,
    noPrice: 0.33,
  },
  {
    id: 2,
    title: '2024 US Presidential Election Winner',
    description: 'This market predicts which candidate will win the 2024 US Presidential Election.',
    category: 'Politics',
    volume: '5.2M',
    endDate: '2024-11-05',
    resolution: 'Multiple Choice',
    options: [
      { name: 'Democrat', price: 0.52 },
      { name: 'Republican', price: 0.46 },
      { name: 'Other', price: 0.02 },
    ],
  },
  {
    id: 3,
    title: 'Will SpaceX Successfully Land Humans on Mars by 2030?',
    description: 'This market predicts whether SpaceX will successfully land humans on Mars by December 31, 2030.',
    category: 'Science & Tech',
    volume: '825K',
    endDate: '2030-12-31',
    resolution: 'Yes/No',
    yesPrice: 0.31,
    noPrice: 0.69,
  },
  {
    id: 4,
    title: 'Will Apple Release a Foldable iPhone by 2026?',
    description: 'This market predicts whether Apple will release a foldable iPhone by December 31, 2026.',
    category: 'Science & Tech',
    volume: '450K',
    endDate: '2026-12-31',
    resolution: 'Yes/No',
    yesPrice: 0.42,
    noPrice: 0.58,
  },
  {
    id: 5,
    title: 'English Premier League Champion 2024-25',
    description: 'This market predicts which team will win the 2024-25 English Premier League season.',
    category: 'Sports',
    volume: '2.1M',
    endDate: '2025-05-25',
    resolution: 'Multiple Choice',
    options: [
      { name: 'Manchester City', price: 0.35 },
      { name: 'Liverpool', price: 0.25 },
      { name: 'Arsenal', price: 0.20 },
      { name: 'Other', price: 0.20 },
    ],
  },
  {
    id: 6,
    title: 'Ethereum to Surpass $10,000 by End of 2025',
    description: 'This market predicts whether Ethereum will reach a price of $10,000 USD by December 31, 2025.',
    category: 'Crypto',
    volume: '950K',
    endDate: '2025-12-31',
    resolution: 'Yes/No',
    yesPrice: 0.48,
    noPrice: 0.52,
  },
];

const categories = ['All', 'Politics', 'Crypto', 'Sports', 'Science & Tech', 'Entertainment', 'Other'];
const sortOptions = ['Popular', 'Ending Soon', 'Recently Added', 'Volume: High to Low', 'Volume: Low to High'];

const ExplorePage = () => {
  const [filteredMarkets, setFilteredMarkets] = useState(allMarkets);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Popular');
  
  const location = useLocation();
  
  useEffect(() => {
    // Get category from URL query parameter
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    
    if (categoryParam && categories.includes(categoryParam)) {
      setCategoryFilter(categoryParam);
    }
  }, [location]);
  
  useEffect(() => {
    // Filter markets based on search term and category
    let results = [...allMarkets];
    
    if (searchTerm) {
      results = results.filter(market => 
        market.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        market.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (categoryFilter !== 'All') {
      results = results.filter(market => 
        market.category === categoryFilter
      );
    }
    
    // Sort markets
    switch (sortBy) {
      case 'Ending Soon':
        results.sort((a, b) => new Date(a.endDate) - new Date(b.endDate));
        break;
      case 'Volume: High to Low':
        results.sort((a, b) => parseFloat(b.volume.replace(/[^0-9.]/g, '')) - parseFloat(a.volume.replace(/[^0-9.]/g, '')));
        break;
      case 'Volume: Low to High':
        results.sort((a, b) => parseFloat(a.volume.replace(/[^0-9.]/g, '')) - parseFloat(b.volume.replace(/[^0-9.]/g, '')));
        break;
      // For Popular and Recently Added, we'll use the default order in this simple demo
      default:
        break;
    }
    
    setFilteredMarkets(results);
  }, [searchTerm, categoryFilter, sortBy]);
  
  return (
    <ExploreContainer>
      <ExploreHeader>
        <ExploreTitle>Explore Markets</ExploreTitle>
        <ExploreSubtitle>
          Browse and trade on prediction markets across various categories
        </ExploreSubtitle>
      </ExploreHeader>
      
      <FiltersContainer>
        <FilterGroup>
          <FilterLabel htmlFor="category">Category:</FilterLabel>
          <Select 
            id="category" 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </Select>
        </FilterGroup>
        
        <FilterGroup>
          <FilterLabel htmlFor="sortBy">Sort By:</FilterLabel>
          <Select 
            id="sortBy" 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
        </FilterGroup>
        
        <SearchContainer>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search markets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </FiltersContainer>
      
      {filteredMarkets.length > 0 ? (
        <MarketsGrid>
          {filteredMarkets.map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </MarketsGrid>
      ) : (
        <NoResults>
          <h3>No markets found</h3>
          <p>Try adjusting your filters or search term</p>
        </NoResults>
      )}
    </ExploreContainer>
  );
};

export default ExplorePage;
