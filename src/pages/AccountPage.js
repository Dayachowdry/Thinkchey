import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import { useAuth } from '../contexts/AuthContext';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Section = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ProfileInfo = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  width: 120px;
`;

const Value = styled.span`
  color: ${({ theme }) => theme.colors.dark};
`;

const DangerZone = styled(Section)`
  border-color: ${({ theme }) => theme.colors.danger};
`;

const DeleteButton = styled.button`
  background: ${({ theme }) => theme.colors.danger};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    opacity: 0.9;
  }
`;

const AccountPage = () => {
  const { user } = useAuth();

  const handleDeleteAccount = () => {
    // Implement account deletion logic
    if (
      window.confirm('Are you sure you want to delete your account? This action cannot be undone.')
    ) {
      // Add deletion logic here
    }
  };

  if (!user) {
    return <div>Please sign in to view this page.</div>;
  }

  return (
    <Layout>
      <Container>
        <Section>
          <SectionTitle>Profile Information</SectionTitle>
          <ProfileInfo>
            <InfoItem>
              <Label>Name:</Label>
              <Value>{user?.name || 'Not available'}</Value>
            </InfoItem>
            <InfoItem>
              <Label>Email:</Label>
              <Value>{user?.email || 'Not available'}</Value>
            </InfoItem>
            <InfoItem>
              <Label>Balance:</Label>
              <Value>₹{user?.balance || '0'}</Value>
            </InfoItem>
          </ProfileInfo>
        </Section>

        <DangerZone>
          <SectionTitle>Danger Zone</SectionTitle>
          <DeleteButton onClick={handleDeleteAccount}>Delete Account</DeleteButton>
        </DangerZone>
      </Container>
    </Layout>
  );
};

export default AccountPage;
