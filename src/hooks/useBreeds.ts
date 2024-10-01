import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { GridRowsProp } from '@mui/x-data-grid';

import { useAppDispatch } from '@/app/store';
import { fetchBreeds } from '@/app/api';

function useBreeds(page: number, limit: number) {
  const [rows, setRows] = useState<GridRowsProp>([]);

  const dispatch = useAppDispatch();

  const {
    isPending,
    error,
    data: breeds,
  } = useQuery({
    queryKey: ['breeds', { page, limit }],
    queryFn: () => fetchBreeds(limit, page, dispatch),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (!breeds) {
      return;
    }

    const rows: GridRowsProp = breeds.map((breed) => ({
      id: breed.id,
      breed: `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`,
      name: breed.name,
      group: breed.breed_group || '-',
      life: breed.life_span,
    }));

    setRows(rows);
  }, [breeds]);

  return { isPending, error, rows };
}

export default useBreeds;
