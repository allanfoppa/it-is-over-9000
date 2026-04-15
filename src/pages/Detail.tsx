import { Suspense, use, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../GlobalStyle';
import { CharacterService } from '../services/CharacterService';
import { Loader } from '../components/Loader';
import { Header } from '../components/Header';

const DetailCard = styled.div`
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  md:flex-row;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.7);
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageSection = styled.div`
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (min-width: 768px) {
    border-bottom: none;
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    flex: 1;
  }

  img {
    height: 400px;
    object-fit: contain;
    filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5));
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const InfoSection = styled.div`
  padding: 3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-family: 'Righteous', cursive;
    color: #f8fafc;
    font-size: 3rem;
    margin: 0 0 1rem 0;
    text-shadow: 0 0 15px rgba(255, 103, 0, 0.4);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #cbd5e1;
    margin-bottom: 2rem;
  }

  .stats {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .stat-row {
      display: flex;
      justify-content: space-between;
      padding-bottom: 0.8rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      span.label {
        color: #94a3b8;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      span.value {
        color: #f8eb25;
        font-weight: 800;
        font-family: 'Outfit', sans-serif;
      }
    }
  }
`;

const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 2rem;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 103, 0, 0.8);
    border-color: #ff6700;
  }
`;

interface ICharacterDetail {
  id: number;
  name: string;
  image: string;
  description: string;
  race: string;
  gender: string;
  ki: string;
  maxKi: string;
  affiliation: string;
}

const CharacterDetailContent = ({ fetchPromise }: { fetchPromise: Promise<ICharacterDetail> }) => {
  const character = use(fetchPromise);

  if (!character || !character.id) {
    return <h2 style={{ textAlign: 'center' }}>Character not found.</h2>;
  }

  return (
    <DetailCard>
      <ImageSection>
        <img src={character.image} alt={character.name} />
      </ImageSection>
      <InfoSection>
        <h2>{character.name}</h2>
        <p>{character.description}</p>
        <div className="stats">
          <div className="stat-row">
            <span className="label">Race</span>
            <span className="value">{character.race}</span>
          </div>
          <div className="stat-row">
            <span className="label">Gender</span>
            <span className="value">{character.gender}</span>
          </div>
          <div className="stat-row">
            <span className="label">Base Ki</span>
            <span className="value">{character.ki}</span>
          </div>
          <div className="stat-row">
            <span className="label">Max Ki</span>
            <span className="value">{character.maxKi}</span>
          </div>
          <div className="stat-row">
            <span className="label">Affiliation</span>
            <span className="value">{character.affiliation}</span>
          </div>
        </div>
      </InfoSection>
    </DetailCard>
  );
};

export const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Initiate the fetch only once when component mounts
  const [fetchPromise] = useState(() =>
    id ? CharacterService.getById(id) : Promise.reject(new Error("No ID"))
  );

  return (
    <Container>
      <Header />
      <BackButton onClick={() => navigate(-1)}>← Back</BackButton>

      <Suspense fallback={<Loader />}>
        <CharacterDetailContent fetchPromise={fetchPromise} />
      </Suspense>
    </Container>
  );
};
