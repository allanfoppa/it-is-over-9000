import styled from 'styled-components';
import { Logo } from './Logo';

const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  height: 200px;
  align-items: center;

  img {
    max-height: 200px;
  }

  &::after {
    content: '';
    display: block;
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #ff6700, transparent);
    margin: -1rem auto 0;
  }
`;

export const Header = () => (
  <HeaderContainer>
    <Logo />
  </HeaderContainer>
);
