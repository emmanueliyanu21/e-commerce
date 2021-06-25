import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="phone-feature container">
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
        </div>
    )
}

export default Header
