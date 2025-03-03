import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as S from './MarketPage.styles';

const MarketPage = () => {
  const { marketId } = useParams();
  const [activeTab, setActiveTab] = useState('buy');
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        setLoading(true);
        // TODO: Replace with actual API call
        const response = await fetch(`/api/markets/${marketId}`);
        const data = await response.json();
        setMarketData(data);
      } catch (err) {
        setError('Failed to fetch market data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, [marketId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <S.MarketContainer>
      <S.MarketHeader>
        <S.BreadcrumbNav>
          <Link to="/markets">Markets</Link>
          <span>/</span>
          <span>{marketData?.name}</span>
        </S.BreadcrumbNav>

        <S.MarketTitle>{marketData?.name}</S.MarketTitle>

        <S.MarketMeta>
          <S.MarketMetaItem>
            <S.MarketCategory>{marketData?.category}</S.MarketCategory>
          </S.MarketMetaItem>
        </S.MarketMeta>
      </S.MarketHeader>

      <S.MarketGrid>
        <S.MarketInfo>
          <S.Card>
            <S.MarketDescription>{marketData?.description}</S.MarketDescription>

            <S.MarketDetailsTitle>Market Details</S.MarketDetailsTitle>
            <S.DetailsList>
              <li>
                <span>Volume</span>
                <span>{marketData?.volume}</span>
              </li>
              <li>
                <span>Liquidity</span>
                <span>{marketData?.liquidity}</span>
              </li>
            </S.DetailsList>
          </S.Card>

          <S.Card>
            <S.ChartContainer>{/* TODO: Add chart component */}</S.ChartContainer>
          </S.Card>
        </S.MarketInfo>

        <S.TradeSection>
          <S.Card>
            <S.TradeTabs>
              <S.TradeTab active={activeTab === 'buy'} onClick={() => setActiveTab('buy')}>
                Buy
              </S.TradeTab>
              <S.TradeTab active={activeTab === 'sell'} onClick={() => setActiveTab('sell')}>
                Sell
              </S.TradeTab>
            </S.TradeTabs>

            <S.TradeForm onSubmit={e => e.preventDefault()}>
              <S.FormGroup>
                <S.FormLabel>Amount</S.FormLabel>
                <S.InputGroup>
                  <S.Input type="number" placeholder="0.00" min="0" step="0.01" />
                  <S.InputAddon>USDC</S.InputAddon>
                </S.InputGroup>
              </S.FormGroup>

              <S.TradeButton type="submit">{activeTab === 'buy' ? 'Buy' : 'Sell'}</S.TradeButton>
            </S.TradeForm>
          </S.Card>
        </S.TradeSection>
      </S.MarketGrid>
    </S.MarketContainer>
  );
};

export default MarketPage;
