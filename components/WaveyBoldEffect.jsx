"use client";

import React, { useState, useEffect } from 'react';

const WaveyBoldEffect = ({ children, typingSpeed = 50, className = '' }) => {
  const [boldedLength, setBoldedLength] = useState(0);

  // Function to recursively extract text content from children
  const getTextContent = (nodes) => {
    return React.Children.toArray(nodes).reduce((acc, node) => {
      if (typeof node === 'string') {
        return acc + node;
      }
      if (React.isValidElement(node) && node.props.children) {
        return acc + getTextContent(node.props.children);
      }
      return acc;
    }, '');
  };

  const fullText = getTextContent(children);

  useEffect(() => {
    const interval = setInterval(() => {
      setBoldedLength((prevLength) => {
        if (prevLength >= fullText.length) {
          return 0; // Loop the effect
        }
        return prevLength + 1;
      });
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [fullText.length, typingSpeed]);

  let charCount = 0;

  // Function to recursively render children with the bold effect
  const renderWithBold = (nodes) => {
    return React.Children.map(nodes, (node) => {
      if (typeof node === 'string') {
        const chars = node.split('').map((char) => {
          const isBold = charCount < boldedLength;
          charCount++;
          return <span key={charCount} className={isBold ? 'font-bold' : ''}>{char}</span>;
        });
        return <>{chars}</>;
      }

      if (React.isValidElement(node) && node.props.children) {
        return React.cloneElement(node, { ...node.props, children: renderWithBold(node.props.children) });
      }

      return node;
    });
  };

  return <div className={className}>{renderWithBold(children)}</div>;
};

export default WaveyBoldEffect;
