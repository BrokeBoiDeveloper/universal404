import React from "react";
import "../styles/PopupWindow.css"; // Correct path for CSS import
import AboutPopup from "./AboutPopup"; // Correct path for component imports
import LinksPopup from "./LinksPopup"; // Correct path for component imports
import SwapPopup from "./SwapPopup"; // Correct path for component imports
import { ReactComponent as Line34 } from "../assets/Line34.svg";
import { ReactComponent as Line35 } from "../assets/Line35.svg";
import { ReactComponent as Line38 } from "../assets/Line38.svg";
import { ReactComponent as Line39 } from "../assets/Line39.svg";
import { ReactComponent as Line40 } from "../assets/Line40.svg";
import { ReactComponent as Line41 } from "../assets/Line41.svg";
import { ReactComponent as Line42 } from "../assets/Line42.svg";

const PopupWindow = ({ title, onClose }) => {
  const renderContent = () => {
    switch (title) {
      case "ABOUT":
        return <AboutPopup />;
      case "LINKS":
        return <LinksPopup />;
      case "SWAP":
        return <SwapPopup />;
      // Add more cases for other popup windows as needed
      default:
        return null;
    }
  };

  return (
    <div className="popup-window">
      <div className="popup-content">
        {renderContent()}
        <div className="bottomleftcorner">
          <div className="overlap-group">
            <Line34 className="line" />
            <Line35 className="icon-instance-node" />
          </div>
        </div>
        <div className="bottomrightcorner">
          <div className="overlap-group">
            <Line42 className="line-42" />
            <Line39 className="line-39" />
          </div>
        </div>
        <div className="topleftcorner">
          <div className="overlap-group">
            <Line38 className="line-2" />
            <Line35 className="icon-instance-node" />
          </div>
        </div>
        <div className="toprightcorner">
          <div className="overlap-group">
            <Line40 className="line-2" />
            <Line41 className="line-41" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupWindow;