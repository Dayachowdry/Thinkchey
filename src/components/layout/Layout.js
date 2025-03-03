import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const Content = styled.main`
  padding-top: 60px; // Height of navbar
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default Layout;
