import React from 'react';
import Logo from './Logo';
// import SvgGame from './SvgGame';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="overlay">
        <Logo size={300} color="white" />
        {/* <SvgGame/> */}
        <h1>Coming Soon</h1>
      </div>
    </main>
  );
};

export default MainContent;
