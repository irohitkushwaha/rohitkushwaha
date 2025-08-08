"use client";

import React, { useState, useEffect } from 'react';

const RichTextBoldTypewriter = ({ children, typingSpeed = 50 }) => {
  const [charIndex, setCharIndex] = useState(0);
  const textContent = React.Children.toArray(children).reduce((acc, child) => {
    if (typeof child === 'string') return acc + child;
    if (child.props && child.props.children) {
      return acc + (child.props.children || '');
    }
    return acc;
  }, '');

  useEffect(() => {
    const timer = setInterval(() => {
      setCharIndex((prevIndex) => (prevIndex + 1) % (textContent.length || 1));
    }, typingSpeed);
    return () => clearInterval(timer);
  }, [textContent.length, typingSpeed]);

  let currentIndex = 0;
  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (typeof child !== 'string') {
        return React.cloneElement(child, { ...child.props, children: renderChildren(child.props.children) });
      }

      const chars = child.split('').map((char, index) => {
        const absoluteIndex = currentIndex + index;
        const isBold = absoluteIndex === charIndex;
        return (
          <span key={index} className={isBold ? 'font-bold' : 'font-normal'}>
            {char}
          </span>
        );
      });
      currentIndex += child.length;
      return chars;
    });
  };

  // This is a workaround to handle nested children in React elements like <b>
  const renderChildrenWithNesting = (nodes) => {
    return React.Children.map(nodes, (node) => {
      if (typeof node === 'string') {
        const chars = node.split('').map((char, index) => {
            const absoluteIndex = currentIndex + index;
            const isBold = absoluteIndex === charIndex;
            return <span key={index} className={isBold ? 'font-bold' : ''}>{char}</span>;
        });
        currentIndex += node.length;
        return chars;
      }
      if (React.isValidElement(node)) {
        currentIndex = 0; // Reset for each new paragraph context
        return React.cloneElement(node, { ...node.props, children: renderChildrenWithNesting(node.props.children) });
      }
      return node;
    });
  }

  return <>{renderChildrenWithNesting(children)}</>;
};

export default RichTextBoldTypewriter;
