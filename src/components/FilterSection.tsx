import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;

  select {
    appearance: none;
    padding: 0.8rem 2.5rem 0.8rem 1.5rem;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(10px);
    color: #e2e8f0;
    font-family: 'Outfit', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff6700' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;

    &:hover {
      border-color: rgba(255, 103, 0, 0.5);
      box-shadow: 0 0 15px rgba(255, 103, 0, 0.2);
    }
    &:focus {
      outline: none;
      border-color: #ff6700;
    }

    option {
      background: #0f172a;
      color: #e2e8f0;
    }
  }
`;

interface FilterSectionProps {
  value: string;
  onChange: (value: string) => void;
}


export const FilterSection = ({ value, onChange }: FilterSectionProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return(
    <Container>
      <select
        data-testid="race-filter"
        value={searchParams.get('race') || value}
        onChange={(e) => {
          onChange(e.target.value)
          setSearchParams((prev) => {
            prev.set('race', e.target.value);
            return prev;
          });
        }}
      >
        <option value="">All Races</option>
        <option value="Saiyan">Saiyan</option>
        <option value="Human">Human</option>
        <option value="Namekian">Namekian</option>
        <option value="Majin">Majin</option>
        <option value="Frieza Race">Frieza Race</option>
        <option value="Android">Android</option>
        <option value="Jiren Race">Jiren Race</option>
        <option value="God">God</option>
        <option value="Angel">Angel</option>
        <option value="Evil">Evil</option>
        <option value="Nucleico">Nucleico</option>
        <option value="Nucleico benigno">Nucleico benigno</option>
        <option value="Unknown">Unknown</option>
      </select>
    </Container>
  )
}
