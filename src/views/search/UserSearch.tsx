import Button from '@mui/material/Button';
import HeaderView from '../../components/HeaderView';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Tooltip from '@mui/material/Tooltip';
import api from '../../service/api'; // Importa a instância do Axios
import { useEffect, useState } from 'react';

// Defina as funções para manipulação de eventos
const handleShow = (id: number) => {
  console.log(`Mostrar detalhes do item com id: ${id}`);
};

const handleDelete = (id: number) => {
  console.log(`Deletar item com id: ${id}`);
};

// Defina as colunas da tabela
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'name', headerName: 'Nome', flex: 1 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <span>{params.value === 1 ? 'Ativo' : params.value === 2 ? 'Inativo' : 'Desconhecido'}</span>
    )
  },
  { field: 'role_name', headerName: 'Permissão', flex: 1 },
  {
    field: 'ações',
    headerName: 'Ações',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <>
        <Tooltip title="Mostrar">
          <IconButton aria-label="show" onClick={() => handleShow(params.row.id)}>
            <VisibilityIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Deletar">
          <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </>
    )
  }
];

const TableContainer = styled.div`
  width: 99%;
  display: flex;
  overflow: auto;
  margin: 25px 0 0 0;
`;

const UserSearch = () => {
  const [rows, setRows] = useState<any[]>([]);

  // teste
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/users');
        const data = response.data;

        // Transforme os dados para o formato que a tabela espera
        const formattedData = data.map((user: any) => ({
          id: user.id,
          name: user.name,
          status: user.status,
          role_name: user.roles[0]?.description || 'Desconhecido'
        }));

        setRows(formattedData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeaderView pageTitle="Pesquisar Usuário" />
      <form>
        <Button variant="contained">Contained</Button>
      </form>
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
    </>
  );
};

export default UserSearch;
