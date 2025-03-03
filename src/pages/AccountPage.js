import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import Layout from '../components/layout/Layout';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
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

const Field = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Value = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: white;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }

  ${({ variant }) => variant === 'danger' && `
    color: ${({ theme }) => theme.colors.danger};
    border-color: ${({ theme }) => theme.colors.danger};

    &:hover {
      background: ${({ theme }) => theme.colors.dangerLight};
    }
  `}
`;

const AccountPage = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Please sign in to view this page.</div>;
  }

  return (
    <Layout>
      <Container>
        <Header>
          <Title>Account Settings</Title>
          <Subtitle>Manage your account settings and preferences</Subtitle>
        </Header>

        <Section>
          <SectionTitle>Profile Information</SectionTitle>
          <Field>
            <Label>Name</Label>
            <Value>{user.name}</Value>
          </Field>
          <Field>
            <Label>Email</Label>
            <Value>{user.email}</Value>
          </Field>
          <Field>
            <Label>Account Balance</Label>
            <Value>₹{user.balance.toLocaleString()}</Value>
          </Field>
        </Section>

        <Section>
          <SectionTitle>Account Security</SectionTitle>
          <Field>
            <Label>Password</Label>
            <Value>••••••••</Value>
          </Field>
          <Button>Change Password</Button>
        </Section>

        <Section>
          <SectionTitle>Danger Zone</SectionTitle>
          <Field>
            <Label>Delete Account</Label>
            <Value>Once you delete your account, there is no going back. Please be certain.</Value>
          </Field>
          <Button variant="danger">Delete Account</Button>
        </Section>
      </Container>
    </Layout>
  );
};

export default AccountPage;
