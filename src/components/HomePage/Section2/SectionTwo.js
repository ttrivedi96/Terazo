import React from "react";
import "./section2.css";
import img1 from "./icn_compliant.png";
import img2 from "./icn_fractional.png";
import img3 from "./icn_flexible.png";
import imgProduct from "./img_product.jpg"

const SectionTwo = () => {
  return (
    <div>
      <img src={imgProduct} className="img_product" alt="img"/>
      <span className="HeadingTwo">
        Participate in the Investment Revolution
      </span>
      <div className="cards">
      <div className="RectangleOne">
        <img src={img1} className="Rectangle1icon" alt="img"/><br/>
        <span className="Rectangle1Title">Fully Compliant</span><br/>
        <span className="Rectangle1Desc">
          We are India’s first regulated private market investment platform that
          supports end-to-end issuance and trading of security tokens.
        </span>
      </div>

      <div className="RectangleTwo">
        <img src={img2} className="Rectangle1icon" alt="img"/><br/>
        <span className="Rectangle2Title">Fractional Investing</span><br/>
        <span className="Rectangle2Desc">
        Our platform expands accessibility by fractionalizing private market investments using tokenized ownership.
        </span>
      </div>

      <div className="RectangleThree">
        <img src={img3} className="Rectangle1icon" alt="img"/><br/>
        <span className="Rectangle3Title">Flexible Liquidity</span><br/>
        <span className="Rectangle3Desc">
        Our P2P Marketplace is open to trading at any time with minimum restrictions on lock-ins.
        </span>
      </div>
      </div>
    </div>
  );
};

export default SectionTwo;
