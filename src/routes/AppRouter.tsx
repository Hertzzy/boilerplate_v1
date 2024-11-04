import { Route, Routes } from 'react-router';
import LoginView from '../pages/Login';
import Register from '../pages/Register';
import DashboardLayout from './DashboardLayout';
import ProtectedRoute from './ProtectRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<ProtectedRoute element={<DashboardLayout />} />} />
    </Routes>
  );
};

export default AppRouter;
