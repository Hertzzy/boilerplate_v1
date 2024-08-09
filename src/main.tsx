import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Cria o root do ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Renderiza o componente
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
