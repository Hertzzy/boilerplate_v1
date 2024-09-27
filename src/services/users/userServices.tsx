import api from '../api';

// Criar usuário
export const registerUser = (userData: any) => {
  return api
    .post('/users', userData)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
// Listar todos os usuários
export const ShowAllUsers = () => {
  return api
    .get('/users')
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};

// Visualizar usuário pelo ID
export const ShowUserById = (id: string) => {
  return api
    .get(`/users/id/${id}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
// Editar usuário
export const EditUser = (id: string, userData: any) => {
  return api
    .put(`/users/id/${id}`, userData)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
// Deletar usuário
export const DeleteUser = (id: string) => {
  return api
    .post(`/users/id/${id}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
