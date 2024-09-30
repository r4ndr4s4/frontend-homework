import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { useAppDispatch } from '@/app/store';
import { fetchBreeds } from '@/app/api';

function useBreeds(page: number) {
  const dispatch = useAppDispatch();

  const {
    isPending,
    error,
    data: breeds,
  } = useQuery({
    queryKey: ['breeds', { page }],
    queryFn: () => fetchBreeds(page, dispatch),
    placeholderData: keepPreviousData,
  });

  return { isPending, error, breeds };
}

export default useBreeds;
