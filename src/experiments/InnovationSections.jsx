import React, { useRef } from 'react';
import { gsap } from 'gsap';

const HoverButton = ({ text }) => {
  const hoverBoxRef = useRef(null);
  const overlayRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = hoverBoxRef.current.getBoundingClientRect();
    const isHoveringTop = e.clientY < rect.top + rect.height / 2;

    overlayRef.current.style.bottom = isHoveringTop ? 'auto' : '0';
    overlayRef.current.style.top = isHoveringTop ? '0' : 'auto';

    gsap.to(overlayRef.current, {
      height: '100%',
      duration: 0.2,
      ease: 'linear',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(overlayRef.current, {
      height: 0,
      duration: 0.2,
      ease: 'linear',
    });
  };

  return (
    <div
      ref={hoverBoxRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-52 h-24 bg-blue-500 text-white text-xl font-sans flex justify-center items-center overflow-hidden"
    >
      <div
        ref={overlayRef}
        className="absolute left-0 w-full h-0 bg-blue-700 z-0"
      />
      <span className="relative z-10">{text}</span>
    </div>
  );
};

const InnovationSections = () => {
  return (
    <div className="flex flex-col ">
      <HoverButton text="Button 1" />
      <HoverButton text="Button 2" />
      <HoverButton text="Button 3" />
      <HoverButton text="Button 4" />
      <HoverButton text="Button 5" />
    </div>
  );
};

export default InnovationSections;
