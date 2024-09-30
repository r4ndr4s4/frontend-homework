import { useAppSelector } from '@/app/store';
import Breed from '@/components/Card/Breed';

function FavoritesPage() {
  const favorites = useAppSelector(({ favorites }) => favorites.breedIds);

  return (
    <>
      {favorites.map((breedId) => (
        <Breed key={breedId} breedId={breedId} />
      ))}
    </>
  );
}

export default FavoritesPage;
