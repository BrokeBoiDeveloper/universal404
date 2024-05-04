import React from "react";
import "./PopupWindow.css";

const PopupWindow = ({ onClose }) => {
  return (
    <div className="popup-window">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="popup-content">
        {/* Add content here later */}
      </div>
    </div>
  );
};

export default PopupWindow;