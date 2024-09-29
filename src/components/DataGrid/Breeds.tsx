import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import Container from '../Container';
import { fetchBreeds } from '@/utils';
import { useAppDispatch } from '@/app/store';

function Breeds({ columns }: { columns?: GridColDef[] }) {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 0,
  });
  const [rows, setRows] = useState<GridRowsProp>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    isPending,
    error,
    data: breeds,
  } = useQuery({
    queryKey: ['breeds', { page: paginationModel.page, limit: paginationModel.pageSize }],
    queryFn: () => fetchBreeds(paginationModel.pageSize, paginationModel.page, dispatch),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (!breeds) {
      return;
    }

    const rows: GridRowsProp = breeds.map((dog) => ({
      id: dog.id,
      breed: 'https://placehold.co/50x50', // dog.reference_image_id
      name: dog.name,
      group: dog.breed_group,
      life: dog.life_span,
    }));

    setRows(rows);
  }, [breeds]);

  const defaultColumns: GridColDef[] = [
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

  if (isPending) {
    return 'Loading...';
  }

  // TODO add error boundary
  if (error) {
    return 'An error has occurred: ' + error.message;
  }

  return (
    <Container>
      <DataGrid
        rows={rows}
        columns={columns || defaultColumns}
        initialState={{ pagination: { rowCount: -1 } }}
        // paginationMeta={paginationMeta} // TODO add paginationMeta
        pageSizeOptions={[5, 10, 25, 50]}
        paginationModel={paginationModel}
        paginationMode="server"
        onPaginationModelChange={setPaginationModel}
        disableRowSelectionOnClick
        disableColumnResize
      />
    </Container>
  );
}

export default Breeds;
