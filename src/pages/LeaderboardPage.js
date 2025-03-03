import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const LeaderboardPage = () => {
  return (
    <Layout>
      <Container>
        <h1>Leaderboard</h1>
        {/* Leaderboard content will be added later */}
      </Container>
    </Layout>
  );
};

export default LeaderboardPage;
