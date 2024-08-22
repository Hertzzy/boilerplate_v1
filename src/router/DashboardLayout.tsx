import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomeView from '../views/HomeView';
import Sidebar from '../components/Sidebar';
import UserPhotoUpdate from '../views/update/UserPhotoUpdate';
import UserPasswordUpdate from '../views/update/UserPasswordUpdate';
import ClienteSearch from '../views/search/ClienteSearch';
import EmployeeSearch from '../views/search/EmployeeSearch';
import SupplierSearch from '../views/search/SuplierSearch'; // Correção aqui
import UserGroupSearch from '../views/search/UserGroupSearch';
import UserSearch from '../views/search/UserSearch';
import SettingsView from '../views/SettingsView';
import Loading from '../components/alerts/Loading';
import { useTheme } from '../context/ThemeContext';
import ProtectedRoute from '../components/protectRoute';

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { isDarkMode } = useTheme();

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
        {loading && <Loading />}
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<HomeView />} />} />
          <Route path="/update-photo" element={<ProtectedRoute element={<UserPhotoUpdate />} />} />
          <Route path="/update-user-password" element={<ProtectedRoute element={<UserPasswordUpdate />} />} />
          <Route path="/client-search" element={<ProtectedRoute element={<ClienteSearch />} />} />
          <Route path="/supplier-search" element={<ProtectedRoute element={<SupplierSearch />} />} />{' '}
          {/* Correção aqui */}
          <Route path="/employee-search" element={<ProtectedRoute element={<EmployeeSearch />} />} />
          <Route path="/user-group-search" element={<ProtectedRoute element={<UserGroupSearch />} />} />
          <Route path="/user-search" element={<ProtectedRoute element={<UserSearch />} />} />
          <Route path="/settings" element={<ProtectedRoute element={<SettingsView />} />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
