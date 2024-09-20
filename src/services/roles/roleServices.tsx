import api from '../api';

// Criar Role
export const registerRole = async (RoleData: any) => {
  await api
    .post('/roles', RoleData)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
// Listar todos os Roles
export const ShowAllRoles = async () => {
  return api
    .get('/roles')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error as any);
    });
};

// Visualizar Role pelo ID
export const ShowRoleById = async (id: string) => {
  await api
    .get(`/roles/id/${id}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
// Editar Role
export const EditRole = async (id: string, RoleData: any) => {
  await api
    .put(`/roles/id/${id}`, RoleData)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
// Deletar Role
export const DeleteRole = async (id: string) => {
  await api
    .post(`/roles/id/${id}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
