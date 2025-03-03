import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    color-scheme: ${({ theme }) => (theme.isDark ? 'dark' : 'light')};
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.5;
    font-size: 16px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  button {
    font-family: ${({ theme }) => theme.fonts.primary};
    cursor: pointer;
    border: none;
    outline: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  main {
    min-height: calc(100vh - 160px);
    padding: 2rem 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .card {
    background: ${({ theme }) => theme.colors.cardBackground};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.shadows.small};
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .btn {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    transition: all ${({ theme }) => theme.transitions.medium};
    font-weight: 500;
    text-align: center;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
      transform: translateY(-1px);
    }

    &.btn-secondary {
      background: ${({ theme }) => theme.colors.secondary};
      &:hover {
        background: ${({ theme }) => theme.colors.primary};
      }
    }

    &.btn-success {
      background: ${({ theme }) => theme.colors.success};
      &:hover {
        opacity: 0.9;
      }
    }

    &.btn-danger {
      background: ${({ theme }) => theme.colors.danger};
      &:hover {
        opacity: 0.9;
      }
    }

    &.btn-outline {
      background: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      &:hover {
        background: ${({ theme }) => theme.colors.primary};
        color: white;
      }
    }
  }

  /* Dark mode specific styles */
  input, textarea, select {
    background: ${({ theme }) => theme.colors.cardBackground};
    color: ${({ theme }) => theme.colors.textPrimary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    transition: all 0.3s ease;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
    }
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export default GlobalStyle;
