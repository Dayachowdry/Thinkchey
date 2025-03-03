import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './contexts/AuthContext';
import { theme } from './theme/theme';
import HomePage from './pages/HomePage';
import MarketPage from './pages/MarketPage';
import AccountPage from './pages/AccountPage';
import HelpPage from './pages/HelpPage';
import LeaderboardPage from './pages/LeaderboardPage';

const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/market/:id" element={<MarketPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/how-it-works" element={<HelpPage />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
