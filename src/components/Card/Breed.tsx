import NotFound from '../NotFound';
import Container from '../Container';
import useBreed from '@/hooks/useBreed';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { add as addFavorite, remove as removeFavorite } from '@/features/favoritesSlice';
import Error from '../Error';
import Card from '@/components/Card/Card';

function Breed({ breedId }: { breedId: number }) {
  const { isPending, error, breed } = useBreed(breedId);

  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector(({ favorites }) => favorites.breedIds.includes(breedId));

  if (isPending) {
    return 'Loading...';
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!breed) {
    return <NotFound entity="Breed" />;
  }

  return (
    <Container>
      <Card
        breed={breed}
        isFavorite={isFavorite}
        handleFavoriteChange={() => dispatch(isFavorite ? removeFavorite(breedId) : addFavorite(breedId))}
      />
    </Container>
  );
}

export default Breed;
