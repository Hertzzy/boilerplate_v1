import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Crie o root do ReactDOM
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Renderize o componente
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);