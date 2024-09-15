import React, { useState } from 'react';
import { ReactComponent as LogoSVG } from '../assets/logo_nam_nam.svg';

const SvgGame = () => {
  // State to track the position and size of the SVG
  const [logoProps, setLogoProps] = useState({
    cx: 50,  // Initial X position
    cy: 50,  // Initial Y position
    size: 100, // Initial size
  });

  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Handle mouse down (start dragging)
  const handleMouseDown = (e) => {
    const { clientX, clientY } = e;
    setOffset({
      x: clientX - logoProps.cx,
      y: clientY - logoProps.cy,
    });
    setIsDragging(true);
  };

  // Handle mouse move (dragging the SVG)
  const handleMouseMove = (e) => {
    if (isDragging) {
      const { clientX, clientY } = e;
      setLogoProps((prevProps) => ({
        ...prevProps,
        cx: clientX - offset.x,
        cy: clientY - offset.y,
      }));
    }
  };

  // Handle mouse up (stop dragging)
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle resizing the SVG on double click
  const handleDoubleClick = () => {
    setLogoProps((prevProps) => ({
      ...prevProps,
      size: prevProps.size === 100 ? 150 : 100, // Toggle between two sizes
    }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ width: '100vw', height: '100vh', border: '1px solid black' }}
    >
      <svg
        width="100%"
        height="100%"
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
      >
        {/* Use your imported LogoSVG */}
        <LogoSVG
          style={{
            width: logoProps.size,
            height: logoProps.size,
            transform: `translate(${logoProps.cx}px, ${logoProps.cy}px)`,
            cursor: 'pointer', // Pointer cursor to indicate interactivity
          }}
        />
      </svg>
    </div>
  );
};

export default SvgGame;
