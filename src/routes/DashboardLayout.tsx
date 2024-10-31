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
import { useTheme } from '../context/ThemeContext'; // Importando o contexto de tema

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { isDarkMode } = useTheme();

  // Controlar a animação de carregamento
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const showSidebar = location.pathname !== '/login';

  return (
    <div className={`dashboard ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {showSidebar && <Sidebar />}
      <div className="dashboard--content">
        {loading && <Loading />}
        <Routes>
          {[
            { path: '/', element: <Home /> },
            { path: '/user-profile', element: <UserProfile /> },
            { path: '/users-view', element: <UsersView /> },
            { path: '/user-create', element: <UserCreate /> },
            { path: '/settings', element: <Settings /> }
          ].map(({ path, element }) => (
            <Route key={path} path={path} element={<ProtectedRoute element={element} />} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
