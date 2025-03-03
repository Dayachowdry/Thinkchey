import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import LoginButton from '../auth/LoginButton';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const UserButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const UserInfo = styled.div`
  text-align: left;
`;

const UserName = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color ${({ theme }) => theme.transitions.medium};
`;

const Balance = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transitions.medium};
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  min-width: 200px;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  transition: background-color ${({ theme }) => theme.transitions.medium},
              border-color ${({ theme }) => theme.transitions.medium};
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const LogoutButton = styled.button`
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.danger};
  border: none;
  background: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    color: ${({ theme }) => theme.colors.danger};
  }
`;

const UserDropdown = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) {
    return <LoginButton />;
  }

  const getInitials = name => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <UserButton onClick={() => setIsOpen(!isOpen)}>
        <Avatar>{getInitials(user.name)}</Avatar>
        <UserInfo>
          <UserName>{user.name}</UserName>
          <Balance>₹{user.balance || 0}</Balance>
        </UserInfo>
      </UserButton>

      <DropdownMenu isOpen={isOpen}>
        <MenuItem to="/account">
          <i className="fas fa-user" />
          Account Settings
        </MenuItem>
        <MenuItem to="/help">
          <i className="fas fa-question-circle" />
          Help Center
        </MenuItem>
        <LogoutButton onClick={handleLogout}>
          <i className="fas fa-sign-out-alt" />
          Sign Out
        </LogoutButton>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default UserDropdown;
