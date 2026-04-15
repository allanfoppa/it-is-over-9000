import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  color: #ff6700;
  font-family: 'Righteous', cursive;
  font-size: 2rem;
  letter-spacing: 2px;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% { opacity: 0.5; transform: scale(0.95); }
    50% { opacity: 1; transform: scale(1.05); text-shadow: 0 0 20px rgba(255, 103, 0, 0.5); }
    100% { opacity: 0.5; transform: scale(0.95); }
  }
`;

export const Loader = () => (
  <LoaderContainer>Gathering Ki...</LoaderContainer>
);
