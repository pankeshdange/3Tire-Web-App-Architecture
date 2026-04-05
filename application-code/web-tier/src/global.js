import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    min-height: 100vh;
  }
  
  #root {
    width: 100%;
    min-height: 100vh;
  }
  
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
  }
  
  h2, h3, h4, h5, h6 {
    margin: 0;
  }
  
  p {
    margin: 0;
  }
  
  img {
    border-radius: 5px;
    height: auto;
    max-width: 100%;
    display: block;
  }
  
  ul, ol {
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style: none;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
  }
  
  input, textarea, select {
    font-family: inherit;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(255, 153, 0, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(255, 153, 0, 0.8);
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`