import React from 'react';
import { ApiProvider } from './context/ApiContext';
import { AppRouter } from './routes/Router';
import  { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ApiProvider>
      <AuthProvider>
      {/* Sólo renderizamos AppRouter, los layouts manejarán Navbar y Footer */}
      <AppRouter />
      </AuthProvider>
    </ApiProvider>
  );
}

export default App;
