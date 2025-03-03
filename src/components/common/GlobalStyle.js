import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.main};
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
    background: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.shadows.small};
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .btn {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    transition: ${({ theme }) => theme.transitions.medium};
    font-weight: 500;
    text-align: center;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
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
`;

export default GlobalStyle;
