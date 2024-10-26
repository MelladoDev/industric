import React from 'react';
import { ApiProvider } from './context/ApiContext';
import { AppRouter } from './routes/Router';

function App() {
  return (
    <ApiProvider>
      {/* Sólo renderizamos AppRouter, los layouts manejarán Navbar y Footer */}
      <AppRouter />
    </ApiProvider>
  );
}

export default App;
