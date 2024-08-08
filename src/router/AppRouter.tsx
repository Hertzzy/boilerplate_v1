// AppRouter.tsx

import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import LoginView from '../views/LoginView';
import HomeView from '../views/HomeView';
import Sidebar from '../components/Sidebar';
import UserPhotoUpdate from '../views/update/UserPhotoUpdate';
import UserPasswordUpdate from '../views/update/UserPasswordUpdate';
import ClienteSearch from '../views/search/ClienteSearch';
import EmployeeSearch from '../views/search/EmployeeSearch';
import SuplierSearch from '../views/search/SuplierSearch';
import UserGroupSearch from '../views/search/UserGroupSearch';
import UserSearch from '../views/search/UserSearch';
import SettingsView from '../views/SettingsView';
import Loading from '../components/alerts/loading';

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Tempo de simulação de carregamento

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Condicional para mostrar o Sidebar apenas quando não estiver na página de login
  const showSidebar = location.pathname !== '/login';

  return (
    <div className="dashboard">
      {showSidebar && <Sidebar />}
      <div className="dashboard--content">
        {loading && <Loading />}
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/update-photo" element={<UserPhotoUpdate />} />
          <Route path="/update-user-password" element={<UserPasswordUpdate />} />
          <Route path="/client-search" element={<ClienteSearch />} />
          <Route path="/supplier-search" element={<EmployeeSearch />} />
          <Route path="/employee-search" element={<SuplierSearch />} />
          <Route path="/user-group-search" element={<UserGroupSearch />} />
          <Route path="/user-search" element={<UserSearch />} />
          <Route path="/settings" element={<SettingsView />} />
        </Routes>
      </div>
    </div>
  );
};

const AppRouter = () => {
  return (
    <Routes>
      {/* Rota para a página de login */}
      <Route path="/login" element={<LoginView />} />

      {/* Rota para o layout do dashboard */}
      <Route path="/*" element={<DashboardLayout />} />
    </Routes>
  );
};

export default AppRouter;
