import React from "react";
import { ReactComponent as Photonlogo } from "../assets/Photonlogo.svg";
import { ReactComponent as Sniperlogo } from "../assets/Sniperlogo.svg";
import { ReactComponent as Xlogo } from "../assets/Xlogo.svg";
import "../styles/LinksPopup.css";

const LinksPopup = () => {
  return (
    <div className="box">
      <div className="linkswindow">
        <div className="logo-group">
          <a href="https://x.com/Universal_404" target="_blank" rel="noopener noreferrer" className="logo">
            <Xlogo className="xlogo-instance" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="logo">
            <Sniperlogo className="sniperlogo-instance" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="logo">
            <Photonlogo className="photonlogo-instance" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinksPopup;