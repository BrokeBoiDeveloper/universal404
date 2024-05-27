import React, { useState } from "react";
import "./Home.css";
import { ReactComponent as NavButton } from "./assets/Nav_button.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import PopupWindow from "./components/PopupWindow";

const Home = () => {
  const [selectedSection, setSelectedSection] = useState("home");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="home">
      <div className="interactive-section-wrapper">
        <div className="interactive-section">
          <div className="text-block">
            <div className="text-wrapper">ECO</div>
            <div className="div">SYSTM</div>
          </div>
          <div className="textlogo">
            <div className="div">404</div>
            <div className="text-wrapper-2">UNIVERSAL</div>
            <div className="rectangle" />
          </div>
          <div className="nav-indicator">
            <NavButton
              className={`nav-button ${
                selectedSection === "home"
                  ? "nav-button-home"
                  : selectedSection === "about"
                  ? "nav-button-about"
                  : selectedSection === "links"
                  ? "nav-button-links"
                  : selectedSection === "swap"
                  ? "nav-button-swap"
                  : "nav-button-home"
              }`}
            />
            <div className="group">
              <div
                className="text-wrapper-home"
                onClick={() => handleSectionClick("home")}
                aria-label="Home"
                role="button"
                tabIndex={0}
                onKeyPress={() => handleSectionClick("home")}
              >
                HOME
              </div>
              <div
                className="text-wrapper-3"
                onClick={() => handleSectionClick("about")}
                aria-label="About"
                role="button"
                tabIndex={0}
                onKeyPress={() => handleSectionClick("about")}
              >
                ABOUT
              </div>
              <div
                className="text-wrapper-4"
                onClick={() => handleSectionClick("links")}
                aria-label="Links"
                role="button"
                tabIndex={0}
                onKeyPress={() => handleSectionClick("links")}
              >
                LINKS
              </div>
              <div
                className="text-wrapper-5"
                onClick={() => handleSectionClick("swap")}
                aria-label="Swap"
                role="button"
                tabIndex={0}
                onKeyPress={() => handleSectionClick("swap")}
              >
                SWAP
              </div>
            </div>
          </div>
          <Logo className="logo-instance" />
          <div className="color-block">
            <div className="rectangle-2" />
            <div className="rectangle-3" />
          </div>
        </div>
      </div>
      {selectedSection !== "home" && (
        <PopupWindow
          title={selectedSection.toUpperCase()}
          onClose={() => handleSectionClick("home")}
        />
      )}
    </div>
  );
};

export default Home;
