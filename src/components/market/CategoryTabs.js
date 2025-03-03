import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  background: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active }) => active ? 'white' : 'inherit'};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  white-space: nowrap;
  transition: ${({ theme }) => theme.transitions.medium};
  font-weight: ${({ active }) => active ? '600' : '400'};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &:hover {
    background: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.light};
  }
`;

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <Container>
      <Tab
        active={activeCategory === 'all'}
        onClick={() => onCategoryChange('all')}
      >
        🎯 All Markets
      </Tab>
      {categories.map(category => (
        <Tab
          key={category.id}
          active={activeCategory === category.id}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.icon} {category.name}
        </Tab>
      ))}
    </Container>
  );
};

export default CategoryTabs;
