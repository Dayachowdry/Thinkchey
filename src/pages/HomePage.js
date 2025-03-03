import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import MarketCard from '../components/market/MarketCard';

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  color: white;
  padding: 4rem 1rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 500;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const SecondaryButton = styled(Link)`
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 500;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.dark};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
`;

const MarketsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
`;

const FeatureSection = styled.section`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 4rem 1rem;
`;

const FeatureContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  text-align: center;

  h3 {
    margin: 1.5rem 0 1rem;
    color: ${({ theme }) => theme.colors.dark};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

// Mock data for popular markets
const popularMarkets = [
  {
    id: 1,
    title: 'Will Bitcoin Reach $100k by End of 2025?',
    description: 'This market predicts whether Bitcoin will reach $100,000 USD by December 31, 2025.',
    category: 'Crypto',
    volume: '1.5M',
    endDate: '2025-12-31',
    resolution: 'Yes/No',
    yesPrice: 0.67,
    noPrice: 0.33,
  },
  {
    id: 2,
    title: '2024 US Presidential Election Winner',
    description: 'This market predicts which candidate will win the 2024 US Presidential Election.',
    category: 'Politics',
    volume: '5.2M',
    endDate: '2024-11-05',
    resolution: 'Multiple Choice',
    options: [
      { name: 'Democrat', price: 0.52 },
      { name: 'Republican', price: 0.46 },
      { name: 'Other', price: 0.02 },
    ],
  },
  {
    id: 3,
    title: 'Will SpaceX Successfully Land Humans on Mars by 2030?',
    description: 'This market predicts whether SpaceX will successfully land humans on Mars by December 31, 2030.',
    category: 'Science & Tech',
    volume: '825K',
    endDate: '2030-12-31',
    resolution: 'Yes/No',
    yesPrice: 0.31,
    noPrice: 0.69,
  },
];

const HomePage = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Predict the Future, Profit from Your Knowledge</HeroTitle>
          <HeroSubtitle>
            Thinkchey is a decentralized prediction market platform where you can trade on the outcome of events and earn rewards for being right.
          </HeroSubtitle>
          <HeroButtons>
            <PrimaryButton to="/explore">Explore Markets</PrimaryButton>
            <SecondaryButton to="/create">Create Market</SecondaryButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <SectionContainer>
        <SectionHeader>
          <h2>Popular Markets</h2>
          <Link to="/explore">View All Markets →</Link>
        </SectionHeader>

        <MarketsGrid>
          {popularMarkets.map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </MarketsGrid>
      </SectionContainer>

      <FeatureSection>
        <FeatureContainer>
          <FeatureTitle>Why Thinkchey?</FeatureTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>🔒</FeatureIcon>
              <h3>Secure & Transparent</h3>
              <p>Built on blockchain technology, all market activities are transparent and immutable. Your funds are always secure.</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>💰</FeatureIcon>
              <h3>Low Fees</h3>
              <p>Trade with minimal fees compared to traditional prediction markets. More of your money goes to your predictions.</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🌐</FeatureIcon>
              <h3>Global Access</h3>
              <p>Available worldwide with no geographic restrictions. Anyone can participate in prediction markets anytime.</p>
            </FeatureCard>
          </FeaturesGrid>
        </FeatureContainer>
      </FeatureSection>

      <SectionContainer>
        <SectionHeader>
          <h2>How It Works</h2>
        </SectionHeader>

        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>1</FeatureIcon>
            <h3>Connect Your Wallet</h3>
            <p>Link your cryptocurrency wallet to Thinkchey to start participating in prediction markets.</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>2</FeatureIcon>
            <h3>Buy Outcome Shares</h3>
            <p>Browse markets and purchase shares for outcomes you believe will happen.</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>3</FeatureIcon>
            <h3>Collect Your Winnings</h3>
            <p>When events resolve in your favor, automatically receive your winnings in your connected wallet.</p>
          </FeatureCard>
        </FeaturesGrid>
      </SectionContainer>
    </>
  );
};

export default HomePage;
