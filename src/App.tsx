import AppRouter from './routes/AppRouter';
import './assets/css/global.css';
import './assets/css/dark-mode.css';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
