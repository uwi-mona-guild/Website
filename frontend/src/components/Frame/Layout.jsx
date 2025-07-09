import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <div style={{ backgroundColor: 'var(--default-red)' }}>
        <Footer />
      </div>
    </>
  );
};

export default Layout;