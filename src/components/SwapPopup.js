import React, { useEffect, useRef } from "react";
import "../styles/SwapPopup.css";

const SwapPopup = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = "Coming soon...";
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        const currentText = text.slice(0, i + 1);
        textRef.current.innerHTML = currentText;
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => {
      clearInterval(typing);
    };
  }, []);

  return (
    <div className="swap-popup">
      <div className="swap-content">
        <p ref={textRef} className="swap-text"></p>
      </div>
    </div>
  );
};

export default SwapPopup;