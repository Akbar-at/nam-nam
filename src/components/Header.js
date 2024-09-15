import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Logo size={50} color="blue" />
      </div>
      <nav className="nav-buttons">
        <button>About Us</button>
        {/* <button>Our Story</button> */}
      </nav>
    </header>
  );
};

export default Header;
