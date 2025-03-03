import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 60vh;
  padding: 2rem;
`;

const NotFoundTitle = styled.h1`
  font-size: 6rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 4rem;
  }
`;

const NotFoundSubtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.dark};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

const NotFoundDescription = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const GoHomeButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 500;
  transition: ${({ theme }) => theme.transitions.medium};
  
  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundSubtitle>Page Not Found</NotFoundSubtitle>
      <NotFoundDescription>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </NotFoundDescription>
      <GoHomeButton to="/">Back to Home</GoHomeButton>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
