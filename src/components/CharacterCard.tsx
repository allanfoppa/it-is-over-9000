import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;
  text-align: center;
  padding-bottom: 2rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: rgba(255, 103, 0, 0.3);
    box-shadow: 0 20px 40px -10px rgba(255, 103, 0, 0.2);

    img {
      transform: scale(1.1);
      filter: drop-shadow(0 15px 25px rgba(255, 103, 0, 0.4));
    }
  }

  .image-container {
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    filter: drop-shadow(0 10px 15px rgba(0,0,0,0.4));
  }

  h3 {
    font-family: 'Righteous', cursive;
    color: #f8fafc;
    margin: 1.5rem 0 0.5rem;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }

  .details {
    display: inline-block;
    padding: 0.4rem 1rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    color: #94a3b8;
    font-size: 0.9rem;
    font-weight: 600;

    strong {
      color: #e2e8f0;
      margin-left: 0.3rem;
    }

    span {
      color: #ff6700;
    }
  }
`;

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  race: string;
  ki: number;
}

interface CharacterCardProps {
  character: ICharacter;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const navigate = useNavigate();
  
  return (
    <Card data-testid="character-card" onClick={() => navigate(`/character/${character.id}`)}>
      <div className="image-container">
        <img src={character.image} alt={character.name} />
      </div>
      <h3>{character.name}</h3>
      <div className="details">
        {character.race} <strong>|</strong> <span>{character.ki} Ki</span>
      </div>
    </Card>
  );
};
