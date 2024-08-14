// src/context/AuthContext.tsx

import React, { createContext, useContext, useState } from 'react';
import api from '../service/api';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      // Requisição na api
      const response = await api.post('/login', { email, password });
      if (response.data.token) {
        // Armazenamento do token no localStorage
        localStorage.setItem('token', response.data.token);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      // Tratamento de erro
      setIsAuthenticated(false);
    }
  };

  // Logout do sistema
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
