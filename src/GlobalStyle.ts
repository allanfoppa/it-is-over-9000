import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Righteous&display=swap');

  body {
    margin: 0;
    padding: 0;
    background: radial-gradient(circle at 50% 0%, #1e293b 0%, #020617 100%);
    background-attachment: fixed;
    color: #e2e8f0;
    font-family: 'Outfit', sans-serif;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #020617;
  }
  ::-webkit-scrollbar-thumb {
    background: #475569;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ff6700;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

export const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;


