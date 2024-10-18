// src/layout/DashboardLayout.tsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Sidebar from '../components/layout/Sidebar';
import Settings from '../pages/Settings';
import Loading from '../components/common/Loading';
import ProtectedRoute from './ProtectRoute';
import UserProfile from '../pages/Profile/UserProfile';
import UsersView from '../pages/User/UsersView';
import UserCreate from '../pages/User/UsersCreate';
import Header from '../components/Headers';
import { FaHome } from 'react-icons/fa';

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

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
        <Header
          pageTitle="Dashboard"
          icon={<FaHome />}
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode(prev => !prev)}
        />
        {loading && <Loading />}
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route
            path="/user-profile"
            element={<ProtectedRoute element={<UserProfile />} />}
          />
          <Route
            path="/users-view"
            element={<ProtectedRoute element={<UsersView />} />}
          />
          <Route
            path="/user-create"
            element={<ProtectedRoute element={<UserCreate />} />}
          />
          <Route
            path="/settings"
            element={<ProtectedRoute element={<Settings />} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
