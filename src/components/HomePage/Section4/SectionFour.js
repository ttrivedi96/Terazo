import React from "react";
import "./SectionFour.css";
import img_build from "./img_flexone.jpg";
import img_loc from "./icn_location.png";
import img_ibld from "./icn_building.svg";
import img_tick from "./icn_tick.svg";
const SectionFour = () => {
  return (
    <div className="divflex">
      <div>
        <img src={img_build} className="img_flexone" alt="img"></img>
        <img src={img_ibld} className="icn_building" alt="img" />
        <div className="Rectangle-4">
          <img src={img_loc} className="icn_location" alt="img"></img>
          <div>
            <span className="FlexOne-GIFT">FlexOne GIFT</span>
            <span className="GIFT-SEZ-Gandhinagar-India">
              GIFT SEZ, Gandhinagar, India
            </span>
          </div>
        </div>
      </div>
      <div>
        <span className="Introducing-Indias-First-Regulated-Token-Offering">
          Introducing India’s First Regulated Token Offering
        </span>
        <br />
        <span className="The-Terazo-Fund-1-is-a-single-asset-fund-investing-in-FlexOne-GIFT-a-Grade-A-commercial-real-estate">
          The Terazo Fund 1 is a single-asset fund investing in FlexOne GIFT,
          a Grade A commercial real estate development project.
        </span>
        <div style={{ position: "relative" }}>
          <img src={img_tick} className="icn_tick" alt="img"></img>
          <span className="Start-Small">Start Small</span>
          <span className="Invest-as-low-as-USD-1000">Invest as low as USD 1000</span>
        </div>
        <div style={{ position: "relative" }}>
          <img src={img_tick} className="icn_tick2" alt="img"></img>
          <span className="High-Growth">High Growth</span>
          <span className="Targeted-IRR-15">Targeted IRR ~ 15%</span>
        </div>
        <div></div>
        <button className="Background"> <span className="Text">
          More Info
        </span> </button>
      </div>
    </div>
  );
};

export default SectionFour;
