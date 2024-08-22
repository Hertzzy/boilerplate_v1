import { Route, Routes } from 'react-router';
import LoginView from '../views/LoginView';
import DashboardLayout from './DashboardLayout';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginView />} />
      <Route path="/*" element={<DashboardLayout />} />
    </Routes>
  );
};

export default AppRouter;
