import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styled from 'styled-components';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 }, // Ajuste flex para distribuição
  { field: 'name', headerName: 'Nome', flex: 1 },
  { field: 'status', headerName: 'Status', flex: 1 },
  { field: 'role_name', headerName: 'Permissão', flex: 1 },
  { field: 'actions', headerName: 'Ações', flex: 1 }
];

const rows = [
  { id: 1, status: 1, name: 'Jon', role_name: 'Administrador' },
  { id: 2, status: 2, name: 'Cersei', role_name: 'Usuário' },
  { id: 3, status: 1, name: 'Jaime', role_name: 'Gerente' },
  { id: 4, status: 3, name: 'Arya', role_name: 'Administrador' },
  { id: 5, status: 1, name: 'Daenerys', role_name: 'Usuário' },
  { id: 6, status: 3, name: 'Pedro', role_name: 'Administrador' },
  { id: 7, status: 2, name: 'Ferrara', role_name: 'Usuário' },
  { id: 8, status: 3, name: 'Rossini', role_name: 'Gerente' },
  { id: 9, status: 1, name: 'Harvey', role_name: 'Gerente' }
];

const TableContainer = styled.div`
  width: 99%;
  display: flex;
  overflow: auto; // Permite rolagem se necessário
  margin: 25px 0 0 0;
`;

export default function DataTable() {
  return (
    <TableContainer>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </TableContainer>
  );
}
