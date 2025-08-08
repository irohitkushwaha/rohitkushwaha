"use client";

import React, { useRef, useState } from "react";

const Hover3DEffect = ({ children }) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    const rotateX = (y / height - 0.5) * -15; // Reduced intensity
    const rotateY = (x / width - 0.5) * 15;   // Reduced intensity

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.6s ease-in-out",
    });
  };

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full overflow-hidden"
    >
      {children}
    </div>
  );
};

export default Hover3DEffect;
