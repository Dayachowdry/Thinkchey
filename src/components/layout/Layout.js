import React from 'react';
import PropTypes from 'prop-types';
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
