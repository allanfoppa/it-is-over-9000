import { use } from 'react';
import { CharacterCard, type ICharacter } from '../components/CharacterCard';
import { Pagination } from '../components/Pagination';
import { CharacterGrid } from '../GlobalStyle';

interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  itemCount: number;
  itemsPerPage: number;
}

interface APIResponse {
  items: ICharacter[];
  meta: PaginationMeta;
}

export const CharacterList = ({
  fetchPromise,
  race,
  onPageChange
}: {
  fetchPromise: Promise<ICharacter[] | APIResponse>,
  race: string,
  onPageChange: (p: number) => void
}) => {
  const data = use(fetchPromise);

  const characters: ICharacter[] = race ? (data as ICharacter[]) : (data as APIResponse).items;
  const meta: PaginationMeta | null = race ? null : (data as APIResponse).meta;

  return (
    <>
      <CharacterGrid>
        {characters.map(char => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </CharacterGrid>

      {meta && !race && (
        <Pagination
          currentPage={meta.currentPage}
          totalPages={meta.totalPages}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
};
