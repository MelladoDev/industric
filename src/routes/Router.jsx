import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import UserProfile from '../views/UserProfile';
import Dashboard from '../views/Dashboard';
import Home from '../views/Home';
import AboutUs from '../views/AboutUs';
import Services from '../views/Services';   
import Products from '../views/Products';
import LoginApp from '../views/LoginApp';


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* User routes */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/user-profile' element={<UserProfile />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<LoginApp />} />
        </Route>

        {/* Admin routes */}
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
