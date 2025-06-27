import React from 'react';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

const BaseLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container mt-4 pt-4 flex-grow-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
