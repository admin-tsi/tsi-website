"use client";
// @ts-ignore
import {ReactLenis} from '@studio-freight/react-lenis';
import React from 'react';

function SmoothScrolling({ children } : { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.03, duration: 0.1, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;