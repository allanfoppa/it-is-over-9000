import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;

  h1 {
    font-family: 'Righteous', cursive;
    font-size: 4.5rem;
    color: transparent;
    background: linear-gradient(135deg, #f8eb25, #ff6700);
    -webkit-background-clip: text;
    background-clip: text;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    filter: drop-shadow(0 0 15px rgba(255, 103, 0, 0.4));
  }

  &::after {
    content: '';
    display: block;
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #ff6700, transparent);
    margin: 1rem auto 0;
  }
`;

export const Header = () => (
  <HeaderContainer>
    <h1>DRAGON BALL EXPLORER</h1>
  </HeaderContainer>
);
