import React from "react";
import "./Section6.css";

import img_photo_register from "./img_Photo_register.png";
import img_register from "./img_register.png";

import img_Photo_explore from "./img_Photo_explore.png";
import img_explore from "./img_explore.png";

import img_Photo_investing from "./img_Photo_investing.png";
import img_investing from "./img_explore.png";

const Section6 = () => {
  return (
    <section>
      <div>
        <div className="Rectangle-29">
          <img src={img_register} className="img_register" alt="img" />
          <span className="Register">Register</span>
          <br />
          <span className="Request-for-an-invite-to-get-on-board">
            Request for an invite to get on board.
          </span>
        </div>
        <img
          src={img_photo_register}
          className="img_Photo_register"
          alt="img"
        />
      </div>

      <div>
        <div className="Rectangle-299">
          <img src={img_explore} className="img_explore" alt="img" />
          <span className="Explore">Explore</span>
          <br />
          <span className="Gain-exclusive-access-to-attractive-private-market-investment-opportunities">
            Gain exclusive access to attractive private market investment
            opportunities.
          </span>
        </div>
        <img src={img_Photo_explore} className="img_Photo_explore" alt="img" />
      </div>

      <div>
        <div className="Rectangle-2999">
          <img src={img_investing} className="img_investing" alt="img" />
          <span className="Happy-Investing">Explore</span>
          <br />
          <span className="Buy-and-sell-starting-at-just-USD-1000">
            Buy and sell starting at just USD 1000
          </span>
        </div>
        <img
          src={img_Photo_investing}
          className="img_Photo_investing"
          alt="img"
        />
      </div>
    </section>
  );
};

export default Section6;
