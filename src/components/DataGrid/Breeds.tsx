import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from 'react-router-dom';

import dogs from '@/assets/dogs.json';
import Container from '../Container';

function Breeds({ columns }: { columns?: GridColDef[] }) {
  const navigate = useNavigate();

  const rows: GridRowsProp = dogs.map((dog) => ({
    id: dog.id,
    breed: 'https://placehold.co/50x50', // dog.reference_image_id
    name: dog.name,
    group: dog.breed_group,
    life: dog.life_span,
  }));

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

  return (
    <Container>
      <DataGrid rows={rows} columns={columns || defaultColumns} disableRowSelectionOnClick disableColumnResize />
    </Container>
  );
}

export default Breeds;
