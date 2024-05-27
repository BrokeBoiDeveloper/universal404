import React from "react";
import { ReactComponent as NavButton } from "../assets/Nav_button_red.svg";  // Correct path for SVG import
import "../styles/AboutPopup.css";  // Correct path for CSS import

const AboutPopup = () => {
  return (
    <div className="box">
      <div className="popup-idea">
        <div className="overlap">
          <div className="idea-header">
            <div className="overlap-group">
              <div className="rectangle"></div>
              <div className="text-wrapper">The Idea</div>
            </div>
          </div>
          <div className="body-copy">
            The Solana ecosystem has become bloated by a plethora of depreciating SPLs. We're here to reclaim that lost liquidity through a unique mechanism leveraging the novel 404 standard.
            <br />
            <br />
            Now, users can swap their old SPLs for a fresh new NFT. A NFT that also holds and appreciates in value over time as more users leverage our protocol.
            <br />
            <br />
            We're here to set the new standard. A universal standard.
          </div>
          <div className="more-nav">
            <div className="learn-more">Learn More</div>
            <NavButton className="nav-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPopup;
