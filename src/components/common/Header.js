import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;

  span {
    margin-left: 0.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 1rem;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.text)};
  font-weight: ${({ active }) => (active ? '500' : '400')};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0.5rem 0;
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 1rem;
    width: 100%;
  }
`;

const ConnectButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 0.5rem 1rem;
  font-weight: 500;
  margin-left: 1rem;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: 0;
    width: 100%;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const isActive = path => {
    return location.pathname === path;
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo to="/">
          <span>Thinkchey</span>
        </Logo>

        <HamburgerButton onClick={toggleNav}>☰</HamburgerButton>

        <Nav isOpen={isNavOpen}>
          <NavLink to="/" active={isActive('/')}>
            Home
          </NavLink>
          <NavLink to="/explore" active={isActive('/explore')}>
            Explore
          </NavLink>
          <NavLink to="/create" active={isActive('/create')}>
            Create Market
          </NavLink>

          <NavButtons>
            <ConnectButton>Connect Wallet</ConnectButton>
          </NavButtons>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
