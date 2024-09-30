import { useParams } from 'react-router-dom';

import Breed from '@/components/Card/Breed';

function BreedPage() {
  const { breedId } = useParams();
  const breedIdAsNumber = Number(breedId);

  // TODO check guarding
  if (!breedId) {
    return null;
  }

  return <Breed breedId={breedIdAsNumber} />;
}

export default BreedPage;
