import { IconButton } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Container from '@/components/Container';
import useBreeds from '@/hooks/useBreeds';
import Error from '../components/Error';
import Grid from '@/components/Grid/Grid';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { paginate } from '@/features/breedsSlice';

function BreedsPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(({ breeds }) => breeds.currentPage);

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: currentPage,
  });

  const { isPending, error, rows } = useBreeds(paginationModel.page, paginationModel.pageSize);

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'breed',
        headerName: 'Breed',
        width: 70,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: (params) => <LazyLoadImage src={params.value} width="50" />,
      },
      { field: 'name', headerName: 'Breed name', width: 300 },
      { field: 'group', headerName: 'Breed group', width: 200, sortable: false },
      { field: 'life', headerName: 'Life expectancy', width: 200, filterable: false, disableColumnMenu: true },
      {
        field: 'open',
        headerName: '',
        width: 70,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: (e) => (
          <IconButton aria-label="go to breed" onClick={() => navigate(`/breeds/${e.row.id}`)}>
            <LaunchIcon />
          </IconButton>
        ),
      },
    ],
    [],
  );

  if (isPending) {
    return 'Loading...';
  }

  if (error) {
    return <Error error={error} />;
  }

  // TODO check guardings: !rows || !rows.length

  return (
    <Container>
      <Grid
        rows={rows}
        columns={columns}
        paginationModel={paginationModel}
        setPaginationModel={(model) => {
          dispatch(paginate(model.page));
          setPaginationModel(model);
        }}
      />
    </Container>
  );
}

export default BreedsPage;
