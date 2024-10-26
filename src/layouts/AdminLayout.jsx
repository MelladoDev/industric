        import React from 'react';
        import Navbar from '../components/Navbar';
        import Footer from '../components/Footer';
        import { Outlet } from 'react-router-dom';

        const AdminLayout = () => {
          return (
            <>
              <Navbar />
              {/* Outlet renderiza el contenido de la ruta específica */}
              <Outlet />
              <Footer />
            </>
          );
        };  

        export default AdminLayout;