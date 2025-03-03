import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import UserDropdown from './UserDropdown';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 1000;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const LogoIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.textSecondary};
  font-weight: ${({ active }) => active ? '600' : '400'};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.light};
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <Nav>
      <NavContent>
        <Logo to="/">
          <LogoIcon>🎯</LogoIcon>
          Thinkchey
        </Logo>

        <NavLinks>
          <NavLink to="/" active={isActive('/')}>
            Markets
          </NavLink>
          <NavLink to="/leaderboard" active={isActive('/leaderboard')}>
            Leaderboard
          </NavLink>
          <NavLink to="/how-it-works" active={isActive('/how-it-works')}>
            How it Works
          </NavLink>
        </NavLinks>

        <RightSection>
          <UserDropdown />
        </RightSection>
      </NavContent>
    </Nav>
  );
};

export default Navbar;
