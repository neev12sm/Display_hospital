import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './Context'; // ✅ adjust this to your actual export

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> {/* ✅ Wrap App in context provider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
