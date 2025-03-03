import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const MarketContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const MarketHeader = styled.div`
  margin-bottom: 2rem;
`;

const BreadcrumbNav = styled.nav`
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

const MarketTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const MarketMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MarketMetaItem = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const MarketCategory = styled.span`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 500;
  font-size: 0.875rem;
`;

const MarketGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const MarketInfo = styled.div``;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const MarketDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const MarketDetailsTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const DetailsList = styled.ul`
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

const TradeSection = styled.div``;

const TradeTabs = styled.div`
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const TradeTab = styled.button`
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ active, theme }) => 
    active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.textSecondary};
  font-weight: ${({ active }) => (active ? '600' : '400')};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TradeForm = styled.form`
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  input {
    margin-right: 0.5rem;
  }
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
`;

const InputAddon = styled.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const TradeButton = styled.button`
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

const TradeInfo = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const TradeInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
    padding-top: 0.5rem;
    border-top: 1px dashed ${({ theme }) => theme.colors.border};
    font-weight: 600;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const OrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  
  th {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

// Mock data for a single market
const marketData = {
  id: 1,
  title: 'Will Bitcoin Reach $100k by End of 2025?',
  description: 'This market predicts whether Bitcoin will reach $100,000 USD by December 31, 2025. The market will resolve to "Yes" if the price of Bitcoin on any major exchange (Coinbase, Binance, Kraken) reaches or exceeds $100,000 USD at any point before the end date. The market will resolve to "No" if the price of Bitcoin does not reach $100,000 USD before the end date.',
  category: 'Crypto',
  volume: '1.5M',
  volumeChange: '+15%',
  liquidity: '500K',
  endDate: '2025-12-31',
  resolution: 'Yes/No',
  yesPrice: 0.67,
  noPrice: 0.33,
  creator: '0x1234...5678',
  createdAt: '2023-08-15',
  rules: 'This market resolves based on the price of Bitcoin as reported on CoinGecko or CoinMarketCap. The market will resolve to "Yes" if Bitcoin price reaches or exceeds $100,000 USD at any point before December 31, 2025. The market will resolve to "No" if the price does not reach this threshold by the end date.',
  recentTrades: [
    { id: 1, type: 'Buy', outcome: 'Yes', shares: 100, price: 0.65, total: 65, time: '10 mins ago', trader: '0xabcd...1234' },
    { id: 2, type: 'Sell', outcome: 'No', shares: 50, price: 0.33, total: 16.5, time: '25 mins ago', trader: '0x9876...5432' },
    { id: 3, type: 'Buy', outcome: 'Yes', shares: 200, price: 0.64, total: 128, time: '1 hour ago', trader: '0xefgh...7890' },
  ]
};

const MarketPage = () => {
  const { id } = useParams();
  const [market, setMarket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('buy');
  const [selectedOutcome, setSelectedOutcome] = useState('yes');
  const [amount, setAmount] = useState('');
  
  useEffect(() => {
    // Simulate fetching market data
    setTimeout(() => {
      setMarket(marketData);
      setLoading(false);
    }, 500);
  }, [id]);
  
  const calculateTotal = () => {
    if (!amount) return 0;
    
    const price = selectedOutcome === 'yes' ? market.yesPrice : market.noPrice;
    return (parseFloat(amount) * price).toFixed(2);
  };
  
  const calculateShares = () => {
    if (!amount) return 0;
    
    const price = selectedOutcome === 'yes' ? market.yesPrice : market.noPrice;
    return Math.floor(parseFloat(amount) / price);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would submit the trade
    alert(`${activeTab === 'buy' ? 'Bought' : 'Sold'} ${calculateShares()} shares of ${selectedOutcome.toUpperCase()} for $${amount}`);
  };
  
  if (loading) {
    return (
      <MarketContainer>
        <p>Loading market data...</p>
      </MarketContainer>
    );
  }
  
  if (!market) {
    return (
      <MarketContainer>
        <p>Market not found</p>
      </MarketContainer>
    );
  }
  
  return (
    <MarketContainer>
      <MarketHeader>
        <BreadcrumbNav>
          <Link to="/explore">Markets</Link>
          <span>›</span>
          <Link to={`/explore?category=${market.category}`}>{market.category}</Link>
          <span>›</span>
          <span>{market.title}</span>
        </BreadcrumbNav>
        
        <MarketTitle>{market.title}</MarketTitle>
        
        <MarketMeta>
          <MarketCategory>{market.category}</MarketCategory>
          
          <MarketMetaItem>
            Volume: ${market.volume} ({market.volumeChange})
          </MarketMetaItem>
          
          <MarketMetaItem>
            Liquidity: ${market.liquidity}
          </MarketMetaItem>
          
          <MarketMetaItem>
            End Date: {new Date(market.endDate).toLocaleDateString()}
          </MarketMetaItem>
        </MarketMeta>
      </MarketHeader>
      
      <MarketGrid>
        <MarketInfo>
          <Card>
            <ChartContainer>
              [Price History Chart - Would be implemented with a real chart library]
            </ChartContainer>
            
            <MarketDescription>
              {market.description}
            </MarketDescription>
          </Card>
          
          <Card>
            <MarketDetailsTitle>Market Details</MarketDetailsTitle>
            <DetailsList>
              <li>
                <span>Category</span>
                <span>{market.category}</span>
              </li>
              <li>
                <span>Resolution</span>
                <span>{market.resolution}</span>
              </li>
              <li>
                <span>End Date</span>
                <span>{new Date(market.endDate).toLocaleDateString()}</span>
              </li>
              <li>
                <span>Creator</span>
                <span>{market.creator}</span>
              </li>
              <li>
                <span>Created</span>
                <span>{new Date(market.createdAt).toLocaleDateString()}</span>
              </li>
            </DetailsList>
          </Card>
          
          <Card>
            <MarketDetailsTitle>Resolution Rules</MarketDetailsTitle>
            <p>{market.rules}</p>
          </Card>
          
          <Card>
            <MarketDetailsTitle>Recent Trades</MarketDetailsTitle>
            <OrdersTable>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Outcome</th>
                  <th>Shares</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Trader</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {market.recentTrades.map((trade) => (
                  <tr key={trade.id}>
                    <td>{trade.type}</td>
                    <td>{trade.outcome}</td>
                    <td>{trade.shares}</td>
                    <td>${trade.price.toFixed(2)}</td>
                    <td>${trade.total.toFixed(2)}</td>
                    <td>{trade.trader}</td>
                    <td>{trade.time}</td>
                  </tr>
                ))}
              </tbody>
            </OrdersTable>
          </Card>
        </MarketInfo>
        
        <TradeSection>
          <Card>
            <TradeTabs>
              <TradeTab 
                active={activeTab === 'buy'}
                onClick={() => setActiveTab('buy')}
              >
                Buy
              </TradeTab>
              <TradeTab 
                active={activeTab === 'sell'}
                onClick={() => setActiveTab('sell')}
              >
                Sell
              </TradeTab>
            </TradeTabs>
            
            <TradeForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Select Outcome</FormLabel>
                <RadioGroup>
                  <RadioOption>
                    <input
                      type="radio"
                      name="outcome"
                      value="yes"
                      checked={selectedOutcome === 'yes'}
                      onChange={() => setSelectedOutcome('yes')}
                    />
                    Yes (${market.yesPrice.toFixed(2)})
                  </RadioOption>
                  <RadioOption>
                    <input
                      type="radio"
                      name="outcome"
                      value="no"
                      checked={selectedOutcome === 'no'}
                      onChange={() => setSelectedOutcome('no')}
                    />
                    No (${market.noPrice.toFixed(2)})
                  </RadioOption>
                </RadioGroup>
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Amount</FormLabel>
                <InputGroup>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="0"
                    step="0.01"
                  />
                  <InputAddon>$</InputAddon>
                </InputGroup>
              </FormGroup>
              
              <TradeButton type="submit" disabled={!amount || parseFloat(amount) <= 0}>
                {activeTab === 'buy' ? 'Buy' : 'Sell'} Shares
              </TradeButton>
              
              <TradeInfo>
                <TradeInfoItem>
                  <span>Price per share</span>
                  <span>${selectedOutcome === 'yes' ? market.yesPrice.toFixed(2) : market.noPrice.toFixed(2)}</span>
                </TradeInfoItem>
                <TradeInfoItem>
                  <span>Estimated shares</span>
                  <span>{calculateShares()}</span>
                </TradeInfoItem>
                <TradeInfoItem>
                  <span>Trading fee (2%)</span>
                  <span>${amount ? (parseFloat(amount) * 0.02).toFixed(2) : '0.00'}</span>
                </TradeInfoItem>
                <TradeInfoItem>
                  <span>Total cost</span>
                  <span>${amount || '0.00'}</span>
                </TradeInfoItem>
              </TradeInfo>
            </TradeForm>
          </Card>
          
          <Card>
            <MarketDetailsTitle>Market Probabilities</MarketDetailsTitle>
            <DetailsList>
              <li>
                <span>Yes</span>
                <span>{(market.yesPrice * 100).toFixed(0)}%</span>
              </li>
              <li>
                <span>No</span>
                <span>{(market.noPrice * 100).toFixed(0)}%</span>
              </li>
            </DetailsList>
          </Card>
        </TradeSection>
      </MarketGrid>
    </MarketContainer>
  );
};

export default MarketPage;
