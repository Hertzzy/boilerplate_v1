import AppRouter from './routes/AppRouter';
import './assets/css/global.css';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}

export default App;
