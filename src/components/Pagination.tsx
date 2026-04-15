import styled, { keyframes } from 'styled-components';

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 10px rgba(255, 103, 0, 0.4); }
  50% { box-shadow: 0 0 20px rgba(248, 235, 37, 0.6); }
  100% { box-shadow: 0 0 10px rgba(255, 103, 0, 0.4); }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 4rem 0 2rem;

  button {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #f8fafc;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
      border-color: transparent;
    }

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #ff6700, #f8eb25);
      border-color: transparent;
      color: #000;
      transform: translateY(-2px);
      animation: ${pulseGlow} 2s infinite;
    }
  }
`;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => (
  <Container>
    <button
      disabled={currentPage === 1}
      onClick={() => onPageChange(1)}
    >First</button>
    <button
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
    >Prev</button>
    <button
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(currentPage + 1)}
    >Next</button>
    <button
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(totalPages)}
    >Last</button>
  </Container>
);
