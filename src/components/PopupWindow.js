import React from "react";
import "../styles/PopupWindow.css";  // Correct path for CSS import
import AboutPopup from "./AboutPopup";  // Correct path for component imports
import LinksPopup from "./LinksPopup";  // Correct path for component imports

const PopupWindow = ({ title, onClose }) => {
  const renderContent = () => {
    switch (title) {
      case "ABOUT":
        return <AboutPopup />;
      case "LINKS":
        return <LinksPopup />;
      // Add more cases for other popup windows as needed
      default:
        return null;
    }
  };

  return (
    <div className="popup-window">
      <div className="popup-content">{renderContent()}</div>
    </div>
  );
};

export default PopupWindow;
