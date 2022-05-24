import React from "react";
import "./FAQs.css";
import img_carat from "./img_carat.svg";

const FAQs = () => {
  return (
    <div className="Rectangle-6">
      <span className="Frequently-Asked-Questions">
        Frequently Asked Questions
      </span>
      <br />
      <div style={{ margin: "50px" }}>
        <div style={{display:"flex"}}>
          <span className="Q-What-is-Terazo-How-does-it-work">
            Q. What is Terazo? How does it work?
          </span>
          {/* <button> */}
          <img
              src={img_carat}
              alt="img"
              style={{ marginLeft: "auto", display: "block" }}
            />
            {/* </button> */}
        </div>
        <div>
          <span className="We-wish-to-make-private-market-investing-inclusive-and-frictionless-for-everyone-through-a-regulated">
            We wish to make private market investing inclusive and frictionless
            for everyone through a regulated and transparent platform. Our dream
            is to create equal opportunities for investment and a faster, safer
            and simpler way to trade.
          </span>
        </div>

        <div className="Vector-15"></div>


        <div style={{display:"flex"}}>
        <span className="Q-Question-goes-here-and-can-be-longer-too">
          Q. What is tokenization?
        </span>
        {/* <button> */}
        <img
          src={img_carat}
          alt="img"
          style={{ marginLeft: "auto", display: "block" }}
        />
        {/* </button> */}
        </div>

        <div></div>

        <div className="Vector-15"></div>


        <div style={{display:"flex"}}>
        <span className="Q-Question-goes-here-and-can-be-longer-too">
          Q. Is Terazo safe? How are my investments protected?
        </span>
        {/* <button> */}
        <img
          src={img_carat}
          alt="img"
          style={{ marginLeft: "auto", display: "block" }}
        />
        {/* </button> */}
        </div>


        <div></div>

        <div className="Vector-15"></div>


        <div style={{display:"flex"}}>
        <span className="Q-Question-goes-here-and-can-be-longer-too">
          Q. Where do I see my investments?
        </span>
        {/* <button> */}
        <img
          src={img_carat}
          alt="img"
          style={{ marginLeft: "auto", display: "block" }}
        />
        {/* </button> */}
        </div>

        <div></div>

        <div className="Vector-15"></div>



        <div style={{display:"flex"}}>
        <span className="Q-Question-goes-here-and-can-be-longer-too">
          Q. Do I need to pay for the invite?
        </span>
        {/* <button> */}
        <img
          src={img_carat}
          alt="img"
          style={{ marginLeft: "auto", display: "block" }}
        />
        {/* </button> */}
        </div>


        <div></div>

        <div className="Vector-15"></div>
      </div>
    </div>
  );
};

export default FAQs;
