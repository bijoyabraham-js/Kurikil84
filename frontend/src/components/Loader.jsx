import React, { useEffect, useState, useRef } from 'react';
import './Loader.css';

function Loader({ onFinish }) {
  const [typedText, setTypedText] = useState('');
  const fullText = 'kurikil';
  const indexRef = useRef(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentIndex = indexRef.current;

      if (currentIndex < fullText.length) {
        const nextChar = fullText.charAt(currentIndex); // ✅ Safe access
        setTypedText((prev) => prev + nextChar);
        indexRef.current += 1;
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          if (typeof onFinish === 'function') {
            onFinish();
          }
        }, 1000);
      }
    }, 400);

    return () => clearInterval(typingInterval);
  }, [onFinish]);

  return (
    <div className="loader-screen">
      <span>{typedText}</span>
    </div>
  );
}

export default Loader;
