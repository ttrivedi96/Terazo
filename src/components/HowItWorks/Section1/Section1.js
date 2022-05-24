import React from 'react'
import Slider from '../slider/Slider';
import "./Section1.css";

import img_dividends from '../Images/img_dividends.png';
import img_payout from '../Images/img_payout.png';
import img_trading from '../Images/img_trading.png';



const Section1 = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center' }}>
                <span className="Start-Investing-in-3-Simple-Steps">
                    Start Investing in 3 Simple Steps
                </span>
                <Slider />
                <div className='bgDiv'>
                    <span className="Terazo-unlocks-returns-in-3-Ways">
                        Terazo unlocks returns in 3 Ways
                    </span>
                    <div className='cards'>
                        <div>
                            <img src={img_dividends} className="img_dividends" alt='img' />
                            <br />
                            <span className="Dividends-Distributions">
                                {' Dividends & Distributions'}
                            </span>
                            <br />
                            <p className="Your-investments-shall-generate-returns-as-dividends-or-distributions-depending-on-the-asset">
                                Your investments shall generate returns as dividends or distributions, depending on the asset.
                            </p>
                        </div>
                        <div>
                            <img src={img_payout} className="img_payout" alt='img' />
                            <br />
                            <span className="Exit-Payouts">
                                {' Exit Payouts'}
                            </span>
                            <br />
                            <p className="Get-opportunities-to-enjoy-distributions-and-payouts-when-investments-are-sold">
                                Get opportunities to enjoy distributions and payouts when investments are sold.
                            </p>
                        </div>
                        <div>
                            <img src={img_trading} className="img_trading" alt='img' />
                            <br />
                            <span className="Marketplace-Trading">
                                {'  Marketplace Trading'}
                            </span>
                            <br />
                            <p className="Make-attractive-returns-when-you-buy-and-sell-on-Terazos-P2P-marketplace">
                                Make attractive returns when you buy and sell on Terazo’s P2P marketplace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section1