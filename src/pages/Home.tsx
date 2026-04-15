import { useState, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from '../GlobalStyle';
import { CharacterService } from '../services/CharacterService';
import { Header } from '../components/Header';
import { FilterSection } from '../components/FilterSection';
import { CharacterList } from '../components/CharacterList';
import { Loader } from '../components/Loader';


export const Home = () => {
  const [searchParams] = useSearchParams();
  const initialRace = searchParams.get('race') || '';
  const [race, setRace] = useState(initialRace);

  const [fetchPromise, setFetchPromise] = useState(() =>
    initialRace
      ? CharacterService.filterByRace({ race: initialRace })
      : CharacterService.getAll(1)
  );

  const handlePageChange = (page: number) => {
    setFetchPromise(CharacterService.getAll(page));
  };

  const handleRaceChange = (newRace: string) => {
    setRace(newRace);
    if (newRace) {
      setFetchPromise(CharacterService.filterByRace({ race: newRace }));
    } else {
      setFetchPromise(CharacterService.getAll(1));
    }
  };

  return (
    <Container>
      <Header />
      <FilterSection value={race} onChange={handleRaceChange} />

      <Suspense fallback={<Loader />}>
        <CharacterList fetchPromise={fetchPromise} race={race} onPageChange={handlePageChange} />
      </Suspense>
    </Container>
  );
};
