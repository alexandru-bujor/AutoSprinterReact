import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm" style={{ height: '5.35em' }}>
      <div className="container" style={{ maxWidth: '80%', display: 'flex', alignItems: 'center' }}>
        <a href="/" className="logo navbar-brand">
          <img className="navbar-img" src="/img/logoN.png" alt="AutoSprinter Logo" style={{ height: 'auto', width: 'auto', objectFit: 'contain' }} />
          <img className="navbar-img2" src="/img/iconA.png" alt="AutoSprinter Logo" style={{ height: 'auto', width: 'auto', objectFit: 'contain' }} />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-4">
            <li className="nav-item">
              <a className="nav-link py-4" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link py-4" href="/catalog">Catalog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link py-4" href="#">Despre</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
