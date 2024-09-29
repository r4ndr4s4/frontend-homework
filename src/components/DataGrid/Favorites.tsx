import { GridColDef } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Breeds from './Breeds';

function Favorites() {
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
      field: 'favorite',
      headerName: '',
      width: 70,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: () => (
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      ),
    },
  ];

  return <Breeds columns={columns} />;
}

export default Favorites;
