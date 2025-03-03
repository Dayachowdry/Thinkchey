import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 2rem 0;
  margin-top: 2rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.dark};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: ${({ theme }) => theme.borderRadius.rounded};
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 1rem 0;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSection>
          <h3>Thinkchey</h3>
          <p>The premier prediction market platform for betting on the outcome of events.</p>
          <SocialLinks>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">T</a>
            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">D</a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">G</a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Markets</h3>
          <ul>
            <li><Link to="/explore?category=politics">Politics</Link></li>
            <li><Link to="/explore?category=crypto">Crypto</Link></li>
            <li><Link to="/explore?category=sports">Sports</Link></li>
            <li><Link to="/explore?category=entertainment">Entertainment</Link></li>
            <li><Link to="/explore?category=science">Science & Tech</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Resources</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/docs">Documentation</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Legal</h3>
          <ul>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/disclaimer">Risk Disclaimer</Link></li>
          </ul>
        </FooterSection>
      </FooterContainer>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} Thinkchey. All rights reserved.</p>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
