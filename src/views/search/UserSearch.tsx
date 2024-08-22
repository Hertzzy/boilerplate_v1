import Button from '@mui/material/Button';
import HeaderView from '../../components/HeaderView';
import DataTable from '../../components/Table/DataTable';

const UserSearch = () => {
  return (
    <>
      <HeaderView pageTitle="Pesquisar Usuário" />
      <form>
        <Button variant="contained">Contained</Button>
      </form>
      <DataTable />
    </>
  );
};

export default UserSearch;
