import React from 'react';
import InstagramIcon from './InstagramIcon';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
