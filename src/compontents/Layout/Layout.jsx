// src/components/Layout/Layout.jsx
import React from 'react';
import NavBar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <main className="layout-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;