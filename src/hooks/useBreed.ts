import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { useAppSelector } from '@/app/store';
import { fetchBreed } from '@/utils';

function useBreed(breedIdAsString?: string) {
  if (!breedIdAsString) {
    return { isPending: false, error: Error('No breedId provided!'), breed: null };
  }

  const breedId = Number(breedIdAsString);

  const breedFromStore = useAppSelector((state) => state.breeds.breeds.find((breed) => breed.id === breedId));

  if (breedFromStore) {
    return { isPending: false, error: null, breed: breedFromStore };
  }

  const {
    isPending,
    error,
    data: breedFromQuery,
  } = useQuery({
    queryKey: ['breed', { breed: breedId }],
    queryFn: () => fetchBreed(breedId),
    placeholderData: keepPreviousData,
  });

  return { isPending, error, breed: breedFromQuery };
}

export default useBreed;
