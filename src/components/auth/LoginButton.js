import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.medium};
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
  }

  img {
    width: 20px;
    height: 20px;
    filter: ${({ theme }) => theme.colors.textPrimary === '#FCFCFD' ? 'invert(1)' : 'none'};
    transition: filter ${({ theme }) => theme.transitions.medium};
  }
`;

const LoginButton = () => {
  const { login } = useAuth();

  return (
    <Button onClick={() => login()}>
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
      Sign in with Google
    </Button>
  );
};

export default LoginButton;
