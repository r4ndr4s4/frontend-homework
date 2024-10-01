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
      pageSizeOptions={[5, 10, 25, 50]}
      paginationModel={paginationModel}
      paginationMode="server"
      rowCount={-1}
      onPaginationModelChange={setPaginationModel}
      disableRowSelectionOnClick
      disableColumnResize
    />
  );
}

export default Grid;
