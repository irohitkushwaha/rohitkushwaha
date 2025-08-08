"use client";

import React, { useRef, useState } from "react";
import WaveyBoldEffect from "./WaveyBoldEffect.jsx";

const ProjectCard3D = ({
  href,
  src,
  alt,
  title,
  description,
  techLogos,
}) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    const rotateX = (y / height - 0.5) * -20; // -10 to 10 degrees
    const rotateY = (x / width - 0.5) * 20; // -10 to 10 degrees

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
      ref={cardRef}
      className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mb-6 rounded-lg overflow-hidden">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </a>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <div className="text-gray-300 text-[16px] mb-6 leading-relaxed min-h-[7rem] flex items-center">
        <WaveyBoldEffect typingSpeed={20}>{description}</WaveyBoldEffect>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7 md:gap-4">
        <div className="flex items-center flex-wrap gap-3">
          {techLogos.map((logo, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-8 h-8 object-contain"
              />
            </div>
          ))}
        </div>
        <a
          href={href}
          className="inline-flex items-center text-white transition-colors duration-200 animate-slide-top-right self-start md:self-auto"
          target="_blank"
        >
          <span className="text-[16px] mr-2 font-semibold">
            Check Live Site
          </span>
          <svg
            className="w-5 h-5 transform -rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard3D;
