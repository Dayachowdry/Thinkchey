import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { getTheme } from './theme/theme';
import { useTheme } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';
import MarketPage from './pages/MarketPage';
import AccountPage from './pages/AccountPage';
import HelpPage from './pages/HelpPage';
import LeaderboardPage from './pages/LeaderboardPage';
import GlobalStyle from './components/common/GlobalStyle';

const ThemedApp = () => {
  const { isDarkMode } = useTheme();
  const theme = getTheme(isDarkMode);

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
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
    </StyledThemeProvider>
  );
};

const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <ThemeProvider>
          <ThemedApp />
        </ThemeProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
