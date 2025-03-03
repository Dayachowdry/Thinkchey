import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
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

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Question = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

const QuestionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const QuestionText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ContactSection = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

const ContactButton = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const HelpPage = () => {
  return (
    <Layout>
      <Container>
        <Header>
          <Title>Help Center</Title>
          <Subtitle>Find answers to common questions and learn how to use Thinkchey</Subtitle>
        </Header>

        <Section>
          <SectionTitle>Getting Started</SectionTitle>
          <QuestionList>
            <Question>
              <QuestionTitle>What is Thinkchey?</QuestionTitle>
              <QuestionText>
                Thinkchey is a prediction market platform where you can trade on future events and
                earn rewards for accurate predictions.
              </QuestionText>
            </Question>
            <Question>
              <QuestionTitle>How do I start trading?</QuestionTitle>
              <QuestionText>
                Sign up using your Google account, get your initial balance, and start making
                predictions on events you're knowledgeable about.
              </QuestionText>
            </Question>
          </QuestionList>
        </Section>

        <Section>
          <SectionTitle>Trading & Markets</SectionTitle>
          <QuestionList>
            <Question>
              <QuestionTitle>How do prediction markets work?</QuestionTitle>
              <QuestionText>
                Each market represents a question about a future event. You can buy shares in either
                "Yes" or "No" outcomes. The price represents the probability of that outcome
                occurring.
              </QuestionText>
            </Question>
            <Question>
              <QuestionTitle>How are markets resolved?</QuestionTitle>
              <QuestionText>
                When an event occurs, markets are resolved based on the actual outcome. Winning
                positions receive ₹1 per share, losing positions receive ₹0.
              </QuestionText>
            </Question>
          </QuestionList>
        </Section>

        <Section>
          <SectionTitle>Account & Security</SectionTitle>
          <QuestionList>
            <Question>
              <QuestionTitle>How do I manage my account?</QuestionTitle>
              <QuestionText>
                Access your account settings through the profile dropdown menu to update your
                information and manage security preferences.
              </QuestionText>
            </Question>
            <Question>
              <QuestionTitle>Is my information secure?</QuestionTitle>
              <QuestionText>
                We use industry-standard security measures to protect your data. Your account is
                secured through Google's authentication system.
              </QuestionText>
            </Question>
          </QuestionList>
        </Section>

        <ContactSection>
          <ContactButton>Contact Support</ContactButton>
        </ContactSection>
      </Container>
    </Layout>
  );
};

export default HelpPage;
