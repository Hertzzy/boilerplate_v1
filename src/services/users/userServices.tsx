import api from '../api';

// Função para registrar um novo usuário
export const registerUser = (userData: any, showLoading: () => void, hideLoading: () => void) => {
  console.log('service: ', userData);
  showLoading(); // Exibindo o loading

  return api
    .post('/users', userData)
    .then(response => {
      hideLoading(); // Esconde o loading ao obter a resposta
      return response; // Retorna a resposta da API
    })
    .catch(error => {
      hideLoading(); // Esconde o loading em caso de erro
      if (error.response) {
        return Promise.reject(error.response); // Retorna a resposta completa da API para inspeção
      }
      return Promise.reject(error);
    });
};
// Listar todos os usuários
export const showAllUsers = (showLoading: () => void, hideLoading: () => void) => {
  showLoading(); // Exibindo o loading

  return api
    .get('/users')
    .then(response => {
      hideLoading(); // Esconde o loading ao obter a resposta
      return response;
    })
    .catch(error => {
      hideLoading(); // Esconde o loading em caso de erro
      throw new Error(error);
    });
};
// Visualizar usuário pelo ID
export const showUserById = (id: string, showLoading: () => void, hideLoading: () => void) => {
  showLoading(); // Exibindo o loading

  return api
    .get(`/users/id/${id}`)
    .then(response => {
      hideLoading(); // Esconde o loading ao obter a resposta
      return response;
    })
    .catch(error => {
      hideLoading(); // Esconde o loading em caso de erro
      throw new Error(error);
    });
};
// Editar usuário
export const sditUser = (id: string, userData: any, showLoading: () => void, hideLoading: () => void) => {
  showLoading(); // Exibindo o loading

  return api
    .put(`/users/id/${id}`, userData)
    .then(response => {
      hideLoading(); // Esconde o loading ao obter a resposta
      return response;
    })
    .catch(error => {
      hideLoading(); // Esconde o loading em caso de erro
      throw new Error(error);
    });
};

export const seleteUser = (id: string, showLoading: () => void, hideLoading: () => void) => {
  showLoading(); // Exibindo o loading

  return api
    .delete(`/users/id/${id}`)
    .then(response => {
      hideLoading(); // Esconde o loading ao obter a resposta
      return response;
    })
    .catch(error => {
      hideLoading(); // Esconde o loading em caso de erro
      throw new Error(error);
    });
};
