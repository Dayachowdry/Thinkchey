import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import LoginButton from '../auth/LoginButton';

const Container = styled.div`
  position: relative;
`;

const DropdownTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: white;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }
`;

const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const DefaultAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + ${({ theme }) => theme.spacing.xs});
  right: 0;
  min-width: 240px;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  z-index: 1000;
  overflow: hidden;
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  background: white;
  cursor: pointer;
  text-align: left;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }

  ${({ variant }) => variant === 'danger' && `
    color: ${({ theme }) => theme.colors.danger};
  `}
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => theme.spacing.xs} 0;
`;

const UserInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.light};
`;

const UserName = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
`;

const UserEmail = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Balance = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.success};
`;

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
  };

  if (!user) {
    return <LoginButton />;
  }

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Container ref={dropdownRef}>
      <DropdownTrigger onClick={() => setIsOpen(!isOpen)}>
        {user.picture ? (
          <UserAvatar src={user.picture} alt={user.name} />
        ) : (
          <DefaultAvatar>{getInitials(user.name)}</DefaultAvatar>
        )}
      </DropdownTrigger>

      {isOpen && (
        <DropdownMenu>
          <UserInfo>
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
            <Balance>Balance: ₹{user.balance.toLocaleString()}</Balance>
          </UserInfo>
          
          <MenuItem onClick={() => window.location.href = '/account'}>
            👤 Account Settings
          </MenuItem>
          
          <MenuItem onClick={() => window.location.href = '/markets'}>
            📊 My Markets
          </MenuItem>
          
          <MenuItem onClick={() => window.location.href = '/transactions'}>
            💰 Transaction History
          </MenuItem>
          
          <Divider />
          
          <MenuItem onClick={() => window.location.href = '/help'}>
            ❓ Help Center
          </MenuItem>
          
          <Divider />
          
          <MenuItem onClick={handleLogout} variant="danger">
            🚪 Sign Out
          </MenuItem>
        </DropdownMenu>
      )}
    </Container>
  );
};

export default UserDropdown;
