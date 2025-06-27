import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapseRef = useRef(null);
  const [height, setHeight] = useState('0px');

  const toggleNavbar = () => {
    setIsCollapsed(prev => !prev);
  };

  useEffect(() => {
    const scrollHeight = collapseRef.current?.scrollHeight;
    setHeight(isCollapsed ? '0px' : `${scrollHeight}px`);
    document.body.style.overflow = isCollapsed ? 'auto' : 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCollapsed]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm custom-navbar" style={{ padding: '0.5rem 0' }}>
      <div className="container navbar-container">
        <a href="/" className="logo navbar-brand">
          <img className="navbar-img2" style={{maxWidth: '60%'}} src="/img/logoN.png" alt="AutoSprinter Logo" />
          <img className="navbar-img" src="/img/logoN.png" alt="AutoSprinter Logo" />
        </a>

        <a href="tel:+37369191783" className="phone-btn d-flex align-items-center justify-content-center" title="Call us">
          <i className="bi bi-telephone-fill"></i>
        </a>

        <button
          className={`navbar-toggler ${!isCollapsed ? '' : 'collapsed'}`}
          type="button"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarCollapse"
          ref={collapseRef}
          className={`navbar-collapse collapse ${!isCollapsed ? 'show' : ''}`}
          style={{
            height: height,
            transition: 'height 0.35s ease',
            overflow: 'hidden',
            width: '100%',
            backgroundColor: 'white',
          }}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="bi bi-house-door"></i>
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cars">
                <i className="bi bi-car-front"></i>
                <span>Cars</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <i className="bi bi-info-circle"></i>
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                <i className="bi bi-envelope"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
