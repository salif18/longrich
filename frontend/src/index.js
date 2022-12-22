import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext';
import { ThemeContextProvider } from './context/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <AuthContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
     </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

