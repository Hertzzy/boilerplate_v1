// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../service/api';

interface AuthContextType {
  authenticated: boolean;
  user: User | null;
  loading: boolean;
  login: (email: string, password_hash: string) => Promise<void>;
  logout: () => void;
}

interface User {
  id: string;
  email: string;
  // outras propriedades do usuário
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading] = useState(true);
  const navigate = useNavigate();

  const login = async (email: string, password_hash: string) => {
    const response = await api.post('/auth/login', { email, password_hash });
    console.log(response);
    const loggedUser = response.data.user;
    const AUTH_TOKEN = response.data.accessToken;

    localStorage.setItem('user', JSON.stringify(loggedUser));
    localStorage.setItem('token', AUTH_TOKEN);

    api.defaults.headers.Authorization = `Bearer ${AUTH_TOKEN}`;

    setUser(loggedUser);
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('user'); // Remove o usuário do localStorage
    localStorage.removeItem('token'); // Remove o token do localStorage

    // Define o Authorization como null para limpar o cabeçalho de autenticação
    api.defaults.headers.Authorization = null;

    setUser(null); // Limpa o estado do usuário
    navigate('/login'); // Redireciona para a página de login após o logout
  };

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
