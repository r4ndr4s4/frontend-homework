import { useAppSelector } from '@/app/store';
import Breed from '@/components/Card/Breed';
import NotFound from '@/components/NotFound';

function FavoritesPage() {
  const favorites = useAppSelector(({ favorites }) => favorites.breedIds);

  if (!favorites.length) {
    return <NotFound entity="Favorites" />;
  }

  return (
    <>
      {favorites.map((breedId) => (
        <Breed key={breedId} breedId={breedId} />
      ))}
    </>
  );
}

export default FavoritesPage;
