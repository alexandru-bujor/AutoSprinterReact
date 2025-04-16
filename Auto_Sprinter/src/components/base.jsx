import React from 'react';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mt-5 pt-5">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
