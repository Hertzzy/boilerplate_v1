import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface TableProps {
  rows: any[];
  columns: GridColDef[];
  localeText?: any;
}

const Table: React.FC<TableProps> = ({ rows, columns, localeText }) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} localeText={localeText} />
    </div>
  );
};

export default Table;
