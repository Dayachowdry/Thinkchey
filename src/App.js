import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/common/GlobalStyle';
import theme from './utils/theme';

// Pages
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import MarketPage from './pages/MarketPage';
import CreateMarketPage from './pages/CreateMarketPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

// Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/market/:id" element={<MarketPage />} />
            <Route path="/create" element={<CreateMarketPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
