import React from 'react';
import { ReactComponent as LogoSVG } from '../assets/logo_nam_nam.svg';

const Logo = ({ size }) => {
    return <LogoSVG style={{ width: size, height: size }} />;
  };
  
  export default Logo;