import { IconButton } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Container from '@/components/Container';
import Breeds from '@/components/DataGrid/Breeds';
import useBreeds from '@/hooks/useBreeds';

function BreedsPage() {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 0,
  });

  const navigate = useNavigate();

  const { isPending, error, rows } = useBreeds(paginationModel.page, paginationModel.pageSize);

  // TODO useMemo
  const columns: GridColDef[] = [
    {
      field: 'breed',
      headerName: 'Breed',
      width: 70,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <img src={params.value} />,
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
  ];

  // TODO check !rows guarding
  if (isPending || !rows) {
    return 'Loading...';
  }

  // TODO add error boundary
  if (error) {
    return 'An error has occurred: ' + error.message;
  }

  return (
    <Container>
      <Breeds rows={rows} columns={columns} paginationModel={paginationModel} setPaginationModel={setPaginationModel} />
    </Container>
  );
}

export default BreedsPage;
