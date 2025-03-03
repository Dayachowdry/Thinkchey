import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  flex: 1;
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  padding-left: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SearchInput = ({ value, onChange }) => {
  return (
    <Container>
      <SearchIcon>🔍</SearchIcon>
      <Input
        type="text"
        placeholder="Search by market..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </Container>
  );
};

export default SearchInput;
