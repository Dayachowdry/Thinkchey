import styled from 'styled-components';

export const MarketContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const MarketHeader = styled.div`
  margin-bottom: 2rem;
`;

export const BreadcrumbNav = styled.nav`
  margin-bottom: 1rem;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  span {
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const MarketTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const MarketMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const MarketMetaItem = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;

  svg {
    margin-right: 0.5rem;
  }
`;

export const MarketCategory = styled.span`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 500;
  font-size: 0.875rem;
`;

export const MarketGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const MarketInfo = styled.div``;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const MarketDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const MarketDetailsTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const DetailsList = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const TradeSection = styled.div``;

export const TradeTabs = styled.div`
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TradeTab = styled.button`
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ active, theme }) => (active ? theme.colors.primary : 'transparent')};
  color: ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.textSecondary)};
  font-weight: ${({ active }) => (active ? '600' : '400')};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TradeForm = styled.form`
  margin-bottom: 1.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    margin-right: 0.5rem;
  }
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
`;

export const InputAddon = styled.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const TradeButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;
