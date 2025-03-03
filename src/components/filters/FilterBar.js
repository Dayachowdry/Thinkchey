import React from 'react';
import styled from 'styled-components';
import SortDropdown from './SortDropdown';
import SearchInput from './SearchInput';
import ViewToggle from './ViewToggle';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FilterBar = ({
  sortBy,
  onSortChange,
  searchTerm,
  onSearchChange,
  viewMode,
  onViewModeChange,
}) => {
  return (
    <Container>
      <SortDropdown value={sortBy} onChange={onSortChange} />
      <SearchInput value={searchTerm} onChange={onSearchChange} />
      <ViewToggle value={viewMode} onChange={onViewModeChange} />
    </Container>
  );
};

export default FilterBar;
