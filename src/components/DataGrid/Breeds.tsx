import { DataGrid, GridCallbackDetails, GridColDef, GridPaginationModel, GridRowsProp } from '@mui/x-data-grid';

import Container from '../Container';

function Breeds({
  rows,
  columns,
  paginationModel,
  setPaginationModel,
}: {
  rows: GridRowsProp;
  columns: GridColDef[];
  paginationModel: GridPaginationModel;
  setPaginationModel: (model: GridPaginationModel, details: GridCallbackDetails) => void;
}) {
  return (
    <Container>
      <DataGrid
        rows={rows}
        columns={columns}
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
