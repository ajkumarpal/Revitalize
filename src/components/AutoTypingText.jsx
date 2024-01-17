import React, { useState, useEffect } from 'react';
const AutoTypingText = ({ text, speed = 200 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => {
        if (index < text.length) {
          return prevText + text[index];
        } else {
          setIndex(0); // Reset the index when reaching the end
          return '';
        }
      });

      setIndex((prevIndex) => prevIndex + 1);
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, index]);

  return <span className="text-5xl font-bold leading-tight home-text">{displayText}</span>
  ;
};


  export default AutoTypingText;