import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-handler">
                    <img src="../../img/footerIcon/Home.png" alt="" />
                    <p>Home</p>
                </div>
                <div className="footer-handler footer-buy">
                    <img src="../../img/footerIcon/Buy.png" alt="" />
                    <p>Buy</p>
                </div>
                <div className="footer-handler">
                    <img src="../../img/footerIcon/entypo_price-tag.png" alt="" />
                    <p>Deal</p>
                </div>
                <div className="footer-handler">
                    <img src="../../img/footerIcon/Wallet.png" alt="" />
                    <p>Wallet</p>
                </div>
                <div className="footer-handler">
                    <img src="../../img/footerIcon/more.png" alt="" />
                    <p>More</p>
                </div>
            </div>
        </div>
    )
}
