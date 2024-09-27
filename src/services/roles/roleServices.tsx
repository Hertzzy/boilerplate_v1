import api from '../api';

// Criar Role
export const registerRole = (RoleData: any) => {
  return api
    .post('/roles', RoleData)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
// Listar todos os Roles
export const ShowAllRoles = () => {
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
export const ShowRoleById = (id: string) => {
  return api
    .get(`/roles/id/${id}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
// Editar Role
export const EditRole = (id: string, RoleData: any) => {
  return api
    .put(`/roles/id/${id}`, RoleData)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
// Deletar Role
export const DeleteRole = (id: string) => {
  return api
    .post(`/roles/id/${id}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
