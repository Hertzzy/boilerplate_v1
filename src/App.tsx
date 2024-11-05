import AppRouter from './routes/AppRouter';
import './assets/css/global.css';
import './assets/css/dark-mode.css';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { LoadingProvider } from './context/LoadingContext'; // Importa o LoadingProvider

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LoadingProvider>
          <AppRouter />
        </LoadingProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
