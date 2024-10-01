import { DataGrid, GridCallbackDetails, GridColDef, GridPaginationModel, GridRowsProp } from '@mui/x-data-grid';

function Grid({
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
  );
}

export default Grid;
