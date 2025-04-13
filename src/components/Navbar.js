import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/logo kumami final.png';

const Navbar = () => {
  React.useEffect(() => {
    // Initialize Bootstrap dropdown
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(bootstrap => {
      // Initialize all dropdowns
      document.querySelectorAll('.dropdown-toggle').forEach(dropdownToggle => {
        new bootstrap.Dropdown(dropdownToggle);
      });
    });
  }, []);
  return (
    <header className="nav-bg-b main-header navfix fixed-top menu-dark sticky">
      <div className="container-fluid m-pad">
        <nav className="menu-header">
          <div className="dsk-logo">
            <Link className="nav-brand" to="/">
              <img src={logoWhite} alt="Kumami World" className="mega-white-logo" />
              <img src={logoWhite} alt="Kumami World" className="mega-darks-logo" />
            </Link>
          </div>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="custom-nav">
              <ul className="nav-list onepge">
                <li className="dropdown">
                  <button type="button" className="menu-links dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Company</button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                    <li><Link className="dropdown-item" to="/leadership">Leadership</Link></li>
                    <li><Link className="dropdown-item" to="/careers">Careers</Link></li>
                    <li><Link className="dropdown-item" to="/newsroom">Newsroom</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <button type="button" className="menu-links dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Products</button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/education">Education Platform</Link></li>
                    <li><Link className="dropdown-item" to="/games">Games</Link></li>
                    <li><Link className="dropdown-item" to="/news">News Portal</Link></li>
                    <li><Link className="dropdown-item" to="/ai-labs">AI Labs</Link></li>
                    <li><Link className="dropdown-item" to="/staking">Staking</Link></li>
                    <li><Link className="dropdown-item" to="/gaming-guild">Gaming Guild</Link></li>
                  </ul>
                </li>
                <li><Link to="/chaspa" className="menu-links">CHASPA</Link></li>
                <li><Link to="/docs" className="menu-links">Docs</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
