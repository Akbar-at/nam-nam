import React from 'react';
import InstagramIcon from './InstagramIcon';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Follow us on social media:</p>
      <div className="social-media-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
