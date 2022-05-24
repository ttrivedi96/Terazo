import React from 'react'
import img_arrow from './img_arrow.jpg';
import "./Section5.css";
import img_secure from "./img_secure.png";
import img_access from "./img_accessible.png"
import img_simple from "./img_simplified.png"

const Section5 = () => {
    return (
        <div className='divflex'>
            <div style={{ width: "50%", height: "100vh" }}>
                <span className="Features-to-propel-you-ahead">
                    Features to propel you<br /> ahead.
                </span>
                <div style={{ position: "relative", top: "5px", margin: "5px" }}>
                    <img src={img_secure} className="img_secure" alt='img' />
                    <span className="Completely-Secure">Completely Secure</span>
                    <br />
                    <p className="We-deploy-the-power-of-blockchain-technology-using-security-tokens-making-every-transaction-perfect">
                        We deploy the power of blockchain technology<br />
                        using security tokens, making every transaction<br />
                        perfectly safe and tamper-proof.
                    </p>
                </div>
                <div style={{ position: "relative", top: "5px", margin: "5px" }}>
                    <img src={img_access} className="img_secure" alt='img' />
                    <span className="Completely-Secure">Easily Accessible</span>
                    <br />
                    <p className="We-deploy-the-power-of-blockchain-technology-using-security-tokens-making-every-transaction-perfect">
                        Our platform eliminates all barriers and hesitancy <br />
                        to private market investing with lower minimums.
                    </p>
                </div>
                <div style={{ position: "relative", top: "5px" }}>
                    <img src={img_simple} className="img_secure" alt='img' />
                    <span className="Completely-Secure"> Simplified Processes</span>
                    <br />
                    <p className="We-deploy-the-power-of-blockchain-technology-using-security-tokens-making-every-transaction-perfect">
                        Our investor compliances, distributions and<br />
                        transfers are all automated through smart<br />
                        contracts, that make for a safe and seamless process.
                    </p>
                </div>
            </div>
            <div style={{ width: "50%", height: "100vh" }}>
                <img src={img_arrow} className="img_arrow" alt='img' />
            </div>
        </div>
    )
}

export default Section5