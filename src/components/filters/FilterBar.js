import React from 'react';
import PropTypes from 'prop-types';
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

FilterBar.propTypes = {
  sortBy: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  viewMode: PropTypes.string.isRequired,
  onViewModeChange: PropTypes.func.isRequired,
};

export default FilterBar;
