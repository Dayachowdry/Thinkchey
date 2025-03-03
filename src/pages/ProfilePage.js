import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components - we would import and use actual components in a real app
// import MarketCard from '../components/market/MarketCard';

const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProfileAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-right: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileAddress = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  
  span {
    margin-right: 0.5rem;
    font-weight: 500;
  }
  
  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProfileStats = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const StatItem = styled.div`
  span:first-child {
    display: block;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  
  span:last-child {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const TabsContainer = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const TabButton = styled.button`
  padding: 1rem 1.5rem;
  margin-right: 1rem;
  background: transparent;
  border: none;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.textSecondary};
  font-weight: ${({ active }) => active ? '600' : '400'};
  border-bottom: 2px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const EmptyStateCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const EmptyStateTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const EmptyStateDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

const ActionButton = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 500;
  transition: ${({ theme }) => theme.transitions.medium};
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  
  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  
  th {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  
  tr:hover {
    background: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;

const PositionStatus = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.875rem;
  font-weight: 500;
  background: ${({ status, theme }) => {
    switch (status) {
      case 'profit':
        return `${theme.colors.success}20`;
      case 'loss':
        return `${theme.colors.danger}20`;
      default:
        return `${theme.colors.info}20`;
    }
  }};
  color: ${({ status, theme }) => {
    switch (status) {
      case 'profit':
        return theme.colors.success;
      case 'loss':
        return theme.colors.danger;
      default:
        return theme.colors.info;
    }
  }};
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PaginationButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  background: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => active ? 'white' : theme.colors.textSecondary};
  border: 1px solid ${({ active, theme }) => active ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.backgroundAlt};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Mock data
const mockUser = {
  address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  joinedDate: '2023-01-15',
  balance: 1250.75,
  marketsCreated: 0,
  activeTrades: 3,
  totalProfit: 325.50,
};

const mockPositions = [
  {
    id: 1,
    market: 'Will Bitcoin Reach $100k by End of 2025?',
    marketId: 1,
    outcome: 'Yes',
    shares: 100,
    avgPrice: 0.65,
    currentPrice: 0.67,
    profit: 2,
    status: 'profit',
    date: '2023-08-15',
  },
  {
    id: 2,
    market: '2024 US Presidential Election Winner',
    marketId: 2,
    outcome: 'Democrat',
    shares: 50,
    avgPrice: 0.50,
    currentPrice: 0.52,
    profit: 1,
    status: 'profit',
    date: '2023-07-22',
  },
  {
    id: 3,
    market: 'Will SpaceX Successfully Land Humans on Mars by 2030?',
    marketId: 3,
    outcome: 'No',
    shares: 75,
    avgPrice: 0.70,
    currentPrice: 0.69,
    profit: -0.75,
    status: 'loss',
    date: '2023-08-01',
  },
];

const mockTransactions = [
  {
    id: 1,
    type: 'Buy',
    market: 'Will Bitcoin Reach $100k by End of 2025?',
    marketId: 1,
    outcome: 'Yes',
    shares: 100,
    price: 0.65,
    total: 65,
    date: '2023-08-15',
  },
  {
    id: 2,
    type: 'Buy',
    market: '2024 US Presidential Election Winner',
    marketId: 2,
    outcome: 'Democrat',
    shares: 50,
    price: 0.50,
    total: 25,
    date: '2023-07-22',
  },
  {
    id: 3,
    type: 'Buy',
    market: 'Will SpaceX Successfully Land Humans on Mars by 2030?',
    marketId: 3,
    outcome: 'No',
    shares: 75,
    price: 0.70,
    total: 52.5,
    date: '2023-08-01',
  },
  {
    id: 4,
    type: 'Deposit',
    amount: 150,
    date: '2023-07-15',
  },
  {
    id: 5,
    type: 'Deposit',
    amount: 200,
    date: '2023-06-20',
  },
];

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('positions');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Simulate data loading
  const user = mockUser;
  const positions = mockPositions;
  const transactions = mockTransactions;
  
  // Mock function to copy address to clipboard
  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(user.address);
    alert('Address copied to clipboard!');
  };
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'positions':
        return renderPositions();
      case 'markets':
        return renderMarkets();
      case 'transactions':
        return renderTransactions();
      default:
        return null;
    }
  };
  
  const renderPositions = () => {
    if (positions.length === 0) {
      return (
        <EmptyStateCard>
          <EmptyStateTitle>No Positions Yet</EmptyStateTitle>
          <EmptyStateDescription>
            You haven't taken any positions in prediction markets yet.
          </EmptyStateDescription>
          <ActionButton to="/explore">Explore Markets</ActionButton>
        </EmptyStateCard>
      );
    }
    
    return (
      <TransactionsTable>
        <thead>
          <tr>
            <th>Market</th>
            <th>Outcome</th>
            <th>Shares</th>
            <th>Avg. Price</th>
            <th>Current Price</th>
            <th>P/L</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position) => (
            <tr key={position.id}>
              <td>
                <Link to={`/market/${position.marketId}`}>{position.market}</Link>
              </td>
              <td>{position.outcome}</td>
              <td>{position.shares}</td>
              <td>${position.avgPrice.toFixed(2)}</td>
              <td>${position.currentPrice.toFixed(2)}</td>
              <td>
                <PositionStatus status={position.status}>
                  {position.profit > 0 ? '+' : ''}${Math.abs(position.profit).toFixed(2)}
                </PositionStatus>
              </td>
              <td>{new Date(position.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </TransactionsTable>
    );
  };
  
  const renderMarkets = () => {
    return (
      <EmptyStateCard>
        <EmptyStateTitle>No Markets Created</EmptyStateTitle>
        <EmptyStateDescription>
          You haven't created any prediction markets yet.
        </EmptyStateDescription>
        <ActionButton to="/create">Create a Market</ActionButton>
      </EmptyStateCard>
    );
  };
  
  const renderTransactions = () => {
    if (transactions.length === 0) {
      return (
        <EmptyStateCard>
          <EmptyStateTitle>No Transactions Yet</EmptyStateTitle>
          <EmptyStateDescription>
            You haven't made any transactions yet.
          </EmptyStateDescription>
          <ActionButton to="/explore">Explore Markets</ActionButton>
        </EmptyStateCard>
      );
    }
    
    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(transactions.length / itemsPerPage);
    
    return (
      <>
        <TransactionsTable>
          <thead>
            <tr>
              <th>Type</th>
              <th>Details</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>
                  {transaction.market ? (
                    <>
                      <Link to={`/market/${transaction.marketId}`}>{transaction.market}</Link>
                      <span> ({transaction.outcome})</span>
                    </>
                  ) : (
                    'Wallet Transaction'
                  )}
                </td>
                <td>
                  {transaction.type === 'Deposit' ? (
                    `+$${transaction.amount.toFixed(2)}`
                  ) : transaction.type === 'Withdrawal' ? (
                    `-$${transaction.amount.toFixed(2)}`
                  ) : (
                    `$${transaction.total.toFixed(2)}`
                  )}
                </td>
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
        
        {totalPages > 1 && (
          <PaginationContainer>
            <PaginationButton
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </PaginationButton>
            
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationButton
                key={index}
                active={currentPage === index + 1}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </PaginationButton>
            ))}
            
            <PaginationButton
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </PaginationButton>
          </PaginationContainer>
        )}
      </>
    );
  };
  
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileAvatar>U</ProfileAvatar>
        <ProfileInfo>
          <ProfileAddress>
            <span>Address:</span> {user.address.slice(0, 6)}...{user.address.slice(-4)}
            <button onClick={copyAddressToClipboard}>Copy</button>
          </ProfileAddress>
          <div>Member since {new Date(user.joinedDate).toLocaleDateString()}</div>
          
          <ProfileStats>
            <StatItem>
              <span>Balance</span>
              <span>${user.balance.toFixed(2)}</span>
            </StatItem>
            <StatItem>
              <span>Markets Created</span>
              <span>{user.marketsCreated}</span>
            </StatItem>
            <StatItem>
              <span>Active Trades</span>
              <span>{user.activeTrades}</span>
            </StatItem>
            <StatItem>
              <span>Total P/L</span>
              <span style={{ color: user.totalProfit > 0 ? '#3ECF8E' : '#FF6B6B' }}>
                {user.totalProfit > 0 ? '+' : ''}${user.totalProfit.toFixed(2)}
              </span>
            </StatItem>
          </ProfileStats>
        </ProfileInfo>
      </ProfileHeader>
      
      <TabsContainer>
        <TabButton
          active={activeTab === 'positions'}
          onClick={() => setActiveTab('positions')}
        >
          Positions
        </TabButton>
        <TabButton
          active={activeTab === 'markets'}
          onClick={() => setActiveTab('markets')}
        >
          My Markets
        </TabButton>
        <TabButton
          active={activeTab === 'transactions'}
          onClick={() => setActiveTab('transactions')}
        >
          Transactions
        </TabButton>
      </TabsContainer>
      
      {renderTabContent()}
    </ProfileContainer>
  );
};

export default ProfilePage;
