import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      const storedUser = localStorage.getItem('user');
      const token = localStorage.getItem('token');

      if (storedUser && token) {
        const parsedUser: User = JSON.parse(storedUser);
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setUser(parsedUser);
      }

      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password_hash: string) => {
    const response = await api.post('/auth/login', { email, password_hash });

    const loggedUser = response.data.user;
    const AUTH_TOKEN = response.data.accessToken;

    localStorage.setItem('user', JSON.stringify(loggedUser));
    localStorage.setItem('token', AUTH_TOKEN);
    api.defaults.headers.Authorization = `Bearer ${AUTH_TOKEN}`;

    setUser(loggedUser);
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
      {loading ? <div>Loading...</div> : children}
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
