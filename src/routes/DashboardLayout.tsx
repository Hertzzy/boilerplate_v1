import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomeView from '../pages/Home';
import Sidebar from '../layouts/Sidebar';
import Settings from '../pages/Settings';
import Loading from '../components/alerts/Loading';
import ProtectedRoute from './ProtectRoute';

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const showSidebar = location.pathname !== '/login';

  return (
    <div className="dashboard">
      {showSidebar && <Sidebar />}
      <div className="dashboard--content">
        {loading && <Loading />}
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<HomeView />} />} />
          {/* Correção aqui */}
          <Route path="/settings" element={<ProtectedRoute element={<Settings />} />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
