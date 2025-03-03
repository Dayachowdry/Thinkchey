import React from 'react';
import styled from 'styled-components';
import { useGoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../contexts/AuthContext';

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: white;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.light};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const GoogleIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const LoginButton = () => {
  const { login } = useAuth();

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await fetch('/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: response.access_token }),
          credentials: 'include'
        });

        const data = await res.json();
        
        if (res.ok) {
          login(data.user);
        } else {
          console.error('Login failed:', data.message);
        }
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    onError: () => {
      console.error('Google Login Failed');
    }
  });

  return (
    <Button onClick={() => googleLogin()}>
      <GoogleIcon 
        src="https://developers.google.com/identity/images/g-logo.png" 
        alt="Google"
      />
      Continue with Google
    </Button>
  );
};

export default LoginButton;
