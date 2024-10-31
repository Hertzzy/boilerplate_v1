import { Route, Routes } from 'react-router';
import LoginView from '../pages/Login';
import DashboardLayout from './DashboardLayout';
import ProtectedRoute from './ProtectRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginView />} />
      <Route path="/*" element={<ProtectedRoute element={<DashboardLayout />} />} />
    </Routes>
  );
};

export default AppRouter;
