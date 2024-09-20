import api from '../api';

// Criar usuário
export const registerUser = async (userData: any) => {
  await api
    .post('/users', userData)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
// Listar todos os usuários
export const ShowAllUsers = async () => {
  await api
    .get('/users')
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
// Visualizar usuário pelo ID
export const ShowUserById = async (id: string) => {
  await api
    .get(`/users/id/${id}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
// Editar usuário
export const EditUser = async (id: string, userData: any) => {
  await api
    .put(`/users/id/${id}`, userData)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
// Deletar usuário
export const DeleteUser = async (id: string) => {
  await api
    .post(`/users/id/${id}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};
