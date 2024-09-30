import Container from '@/components/Container';
import useBreeds from '@/hooks/useBreeds';
import Error from '../components/Error';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { next, previous } from '@/features/breedsSlice';
import Breeds from '@/components/Grid/Grid';
import NotFound from '@/components/NotFound';

function BreedsPage() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(({ breeds }) => breeds.currentPage);

  const { isPending, error, breeds } = useBreeds(currentPage);

  if (isPending) {
    return 'Loading...';
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!breeds || !breeds.length) {
    return <NotFound entity="Breeds" />;
  }

  return (
    <Container>
      <Breeds rows={breeds} page={currentPage} previous={() => dispatch(previous())} next={() => dispatch(next())} />
    </Container>
  );
}

export default BreedsPage;
