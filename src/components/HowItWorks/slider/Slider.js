import React from "react";

import img_register from '../Images/Register.JPG';
import img_explore from '../Images/Explore.JPG';
import img_invest from '../Images/Invest.JPG';
import img_product_step1 from '../Images/img_product_step1.png';
import img_product_step2 from '../Images/img_product_step2.png';
import img_product_step3 from '../Images/img_product_step3.png';

import "../Section1/Section1.css";

const Slider = () => {

    return (
        <>
            {/* First Slide */}
            <div>
                <img src={img_register} className="Rectangle-27" alt="img" /><br />
                <span class="Request-invite-to-get-on-board">
                    Request invite to get on board
                </span>
                <br />
                <a href="/">
                    <span class="Check-Eligibility-">
                        {"Check Eligibility>"}
                    </span>
                </a>
                <img src={img_product_step1} className="img_product_step1" alt="img" /><br />
            </div>
            {/* Second Slide */}
            <div>
                <img src={img_explore} className="Rectangle-27" alt="img" /><br />
                <span class="Gain-exclusive-access-to-attractive-private-market-investment-opportunities">
                    Gain exclusive access to attractive private market investment opportunities.
                </span>
                <br />
                <img src={img_product_step2} className="img_product_step1" alt="img" /><br />
            </div>

            {/* Third Slide */}
            <div>
                <img src={img_invest} className="Rectangle-27" alt="img" /><br />
                <span class="Buy-and-sell-starting-at-USD-1000">
                    Buy and sell starting at USD 1000
                </span>
                <img src={img_product_step3} className="img_product_step1" alt="img" /><br />
            </div>
        </>
    )
}

export default Slider