import AppRouter from './router/AppRouter';
import './assets/css/main.css';
// import './assets/css/themedarkmode.css';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
