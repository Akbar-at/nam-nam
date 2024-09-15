import React from 'react';
import { ReactComponent as InstagramIconSVG } from '../assets/instagram.svg';

const InstagramIcon = ({ size }) => {
    return <InstagramIconSVG style={{ width: size, height: size }} />;
  };
  
  export default InstagramIcon;