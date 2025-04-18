import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';
import logoWhite from '../assets/logo kumami final.png';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  }

  const closeNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

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
            <div className="custom-nav d-flex justify-content-between align-items-center w-100">
              <div className="navbar-content d-flex w-100">
                <ul className="nav-list onepge">
                  <li className="dropdown">
                    <button type="button" className="menu-links dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Company</button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/about" onClick={closeNavbar}>About Us</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <button type="button" className="menu-links dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Products</button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/education" onClick={closeNavbar}>Education Platform</Link></li>
                      <li><Link className="dropdown-item" to="/games" onClick={closeNavbar}>Games</Link></li>
                      <li><Link className="dropdown-item" to="/news" onClick={closeNavbar}>News Portal</Link></li>
                      <li><Link className="dropdown-item" to="/ai-labs" onClick={closeNavbar}>AI Labs</Link></li>
                      <li><Link className="dropdown-item" to="/staking" onClick={closeNavbar}>Staking</Link></li>
                      <li><Link className="dropdown-item" to="/gaming-guild" onClick={closeNavbar}>Gaming Guild</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/chaspa" className="menu-links" onClick={closeNavbar}>Play CHASPA</Link></li>
                  <li><Link to="/docs" className="menu-links" onClick={closeNavbar}>Docs</Link></li>
                </ul>
                <ul className="auth-list">
                  {currentUser ? (
                    <>
                      <li className="nav-item">
                        <span className="menu-links user-email">{currentUser.email}</span>
                      </li>
                      {!currentUser.emailVerified && (
                        <>
                          <li className="nav-item">
                            <span className="verification-badge">Unverified</span>
                          </li>
                          <li className="nav-item">
                            <button 
                              onClick={() => {
                                sendEmailVerification(currentUser)
                                  .then(() => alert('Verification email sent!'))
                                  .catch(error => alert(error.message));
                              }} 
                              className="menu-links btn-secondary"
                            >
                              Verify
                            </button>
                          </li>
                        </>
                      )}
                      <li className="nav-item">
                        <button onClick={handleLogout} className="menu-links btn-main bg-btn4">Logout</button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item d-flex">
                        <Link to="/login" className="menu-links" onClick={closeNavbar}>Login</Link>
                        <Link to="/signup" className="menu-links btn-main bg-btn4" onClick={closeNavbar}>Sign Up</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
