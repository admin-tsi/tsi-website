'use client';
import React from 'react';
import ReactLenis from '@studio-freight/react-lenis';

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        wheelMultiplier: 0.8,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
