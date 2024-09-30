import { useParams } from 'react-router-dom';

import Breed from '@/components/Card/Breed';
import NotFound from '@/components/NotFound';

function BreedPage() {
  const { breedId } = useParams();
  const breedIdAsNumber = Number(breedId);

  if (!breedId) {
    return <NotFound entity="Breed" />;
  }

  return <Breed breedId={breedIdAsNumber} />;
}

export default BreedPage;
