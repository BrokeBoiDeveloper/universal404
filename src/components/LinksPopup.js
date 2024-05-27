import React from "react";
import { ReactComponent as Line34 } from "../assets/Line34.svg";
import { ReactComponent as Line35 } from "../assets/Line35.svg";
import { ReactComponent as Line38 } from "../assets/Line38.svg";
import { ReactComponent as Line39 } from "../assets/Line39.svg";
import { ReactComponent as Line40 } from "../assets/Line40.svg";
import { ReactComponent as Line41 } from "../assets/Line41.svg";
import { ReactComponent as Line42 } from "../assets/Line42.svg";
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

export default LinksPopup;