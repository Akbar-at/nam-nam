import React from 'react';
import Logo from './Logo';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="overlay">
        <Logo size={300} color="white" />
        <h1>Coming Soon</h1>
      </div>
    </main>
  );
};

export default MainContent;
