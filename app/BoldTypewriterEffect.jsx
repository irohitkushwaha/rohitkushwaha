"use client";

import React, { useState, useEffect } from 'react';

const BoldTypewriterEffect = ({ text, typingSpeed = 100, className = '' }) => {
  const [boldedLength, setBoldedLength] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBoldedLength((prevLength) => {
        // Loop the effect by resetting the length
        if (prevLength >= text.length) {
          return 0;
        }
        return prevLength + 1;
      });
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  const boldedText = text.substring(0, boldedLength);
  const normalText = text.substring(boldedLength);

  return (
    <span className={className}>
      <span className="font-bold">{boldedText}</span>
      <span>{normalText}</span>
    </span>
  );
};

export default BoldTypewriterEffect;
