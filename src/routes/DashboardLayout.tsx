import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Sidebar from '../components/Sidebar/Sidebar';
import Settings from '../pages/Settings';
import Loading from '../components/common/Loading';
import ProtectedRoute from './ProtectRoute';
import UserProfile from '../pages/Profile/UserProfile';
import UsersView from '../pages/User/UsersView';
import UserCreate from '../pages/User/UsersCreate';
import DarkModeButton from '../components/common/DarkModeButton'; // Importando o botão
import { useTheme } from '../context/ThemeContext'; // Importando o contexto de tema

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { isDarkMode } = useTheme();

  // Controlar a animação de carregamento
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const showSidebar = location.pathname !== '/login';

  return (
    <div className={`dashboard ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {showSidebar && <Sidebar />}
      <div className="dashboard--content">
        {/* Botão de Dark Mode adicionado aqui */}
        <DarkModeButton />
        {loading && <Loading />}
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/user-profile" element={<ProtectedRoute element={<UserProfile />} />} />
          <Route path="/users-view" element={<ProtectedRoute element={<UsersView />} />} />
          <Route path="/user-create" element={<ProtectedRoute element={<UserCreate />} />} />
          <Route path="/settings" element={<ProtectedRoute element={<Settings />} />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
