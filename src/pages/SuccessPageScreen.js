import React from 'react'
// import Header from '../components/Header.js'

function SuccessPageScreen() {
    return (
        <div className="">
            <div className="success-bk">
                <div className="phone-feature tran-bk container">
                            <div className="feature-right">
                                <h3 >9:41</h3>
                            </div>
                            <div className="feature-right">
                                <h3>
                                <span class="iconify" data-icon="tabler:antenna-bars-5" data-inline="false"></span>
                                <span class="iconify pl-1" data-icon="ic:outline-wifi" data-inline="false"></span>
                                <span class="iconify pl-2 " data-icon="bi:battery-full" data-inline="false"></span>                           </h3>
                            </div>
            </div>
                <div className="success-page">
                    <img src="../../img/success.png" alt=""/>
                
                <div className="success-details">
                <h2>Checkout Successful</h2>
                <p>Your checkout is now successful</p>
                    </div>
                    </div>
                <div className="button-container">
                    <button className="btn btn-success">Got it</button>
                </div>
            </div>
        </div>
    )
}

export default SuccessPageScreen
