import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Infographic1 } from "../assets/Infographic1.svg";
import { ReactComponent as Infographic2 } from "../assets/Infographic2.svg";
import { ReactComponent as ForwardButtonLive } from "../assets/Forwardbuttonlive.svg";
import { ReactComponent as ForwardButtonDead } from "../assets/Forwardbuttondead.svg";
import { ReactComponent as BackButtonLive } from "../assets/Backbuttonlive.svg";
import { ReactComponent as BackButtonDead } from "../assets/Backbuttondead.svg";
import "../styles/AboutPopup.css";

const AboutPopup = () => {
  const textRef = useRef(null);
  const [showInfographic2, setShowInfographic2] = useState(false);

  useEffect(() => {
    if (!showInfographic2) {
      const text = `Leverage the Universal 404 Protocol to convert existing & depreciating shit-coins into value backed NFTs. \n\n Join us and participate in the new frontier of SPL / NFT launches.`;
      let i = 0;
      const typing = setInterval(() => {
        if (i < text.length) {
          const currentText = text.slice(0, i + 1);
          const lines = currentText.split("\n");
          textRef.current.innerHTML = lines
            .map((line) => `<span>${line}</span>`)
            .join("<br>");
          i++;
        } else {
          clearInterval(typing);
        }
      }, 50);
      return () => {
        clearInterval(typing);
      };
    }
  }, [showInfographic2]);

  const handleForwardClick = () => {
    setShowInfographic2(true);
  };

  const handleBackClick = () => {
    setShowInfographic2(false);
  };

  return (
    <div className="about-popup">
      <div className="about-content">
        {!showInfographic2 && (
          <>
            <p ref={textRef} className="about-text"></p>
            <br />
            <div className="infographic">
              <Infographic1 width="350" height="100" />
            </div>
            <br />
            <br />
          </>
        )}
        {showInfographic2 && (
          <div className="infographic infographic2">
            <Infographic2 width="500" height="300" />
          </div>
        )}
        <div className="navigation-buttons">
          {!showInfographic2 && (
            <>
              <BackButtonDead className="back-button" />
              <ForwardButtonLive className="forward-button" onClick={handleForwardClick} />
            </>
          )}
          {showInfographic2 && (
            <>
              <BackButtonLive className="back-button" onClick={handleBackClick} />
              <ForwardButtonDead className="forward-button" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPopup;