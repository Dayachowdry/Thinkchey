import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  background: ${({ active, theme }) => (active ? theme.colors.cardBackground : 'transparent')};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.medium};
  box-shadow: ${({ active, theme }) => (active ? theme.shadows.small : 'none')};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.colors.cardBackground : theme.colors.border};
  }
`;

const ViewToggle = ({ value, onChange }) => {
  return (
    <Container>
      <Button active={value === 'grid'} onClick={() => onChange('grid')}>
        📱
      </Button>
      <Button active={value === 'list'} onClick={() => onChange('list')}>
        📄
      </Button>
    </Container>
  );
};

ViewToggle.propTypes = {
  value: PropTypes.oneOf(['grid', 'list']).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ViewToggle;
