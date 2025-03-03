import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: white;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: ${({ theme }) => theme.spacing.xs};
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  z-index: 10;
  min-width: 200px;
`;

const Option = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  background: ${({ active, theme }) => active ? theme.colors.light : 'white'};
  cursor: pointer;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }
`;

const sortOptions = [
  { id: 'trending', label: 'Trending', icon: '📈' },
  { id: 'liquidity', label: 'Liquidity', icon: '💧' },
  { id: 'volume', label: 'Volume', icon: '📊' },
  { id: 'newest', label: 'Newest', icon: '🆕' },
  { id: 'ending', label: 'Ending Soon', icon: '⏳' }
];

const SortDropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = sortOptions.find(opt => opt.id === value) || sortOptions[0];

  const handleSelect = (option) => {
    onChange(option.id);
    setIsOpen(false);
  };

  return (
    <Container>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <span>Sort by</span>
        <span>{selectedOption.icon}</span>
        <span>{selectedOption.label}</span>
      </Button>

      {isOpen && (
        <Dropdown>
          {sortOptions.map(option => (
            <Option
              key={option.id}
              active={option.id === value}
              onClick={() => handleSelect(option)}
            >
              <span>{option.icon}</span>
              <span>{option.label}</span>
            </Option>
          ))}
        </Dropdown>
      )}
    </Container>
  );
};

export default SortDropdown;
