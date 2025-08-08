"use client";

import React, { useEffect, useRef, useState } from 'react';

const AnimateOnScroll = ({ children, animationClass, hiddenClass }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`${!isVisible ? hiddenClass : ''} ${isVisible ? animationClass : ''}`}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;
