import React from 'react'


function HomeScreen() {
    return (
        <div>
            <div className="header">
                <h2>Trollbasket</h2>
               
                <div className="list-wrapper">
                    <div className="ul-list">
                    <span class="iconify" data-icon="ant-design:shopping-cart-outlined" ></span>
                    <span>Lagos</span>
                    <i class="fas fa-angle-down"></i>
                </div>
                    <div className="ul-list">
                    <i class="iconify" data-icon="mdi:package" ></i>
                    <span>My Orders</span>
                    <i></i>
                </div>
                    <div className="ul-list">
                        <span class="iconify" data-icon="ant-design:shopping-cart-outlined" ></span>
                    <span>Cart</span>
                    <i></i>
                    </div>
                    </div>
                
                <div className="header-form">
                <form action="">
                    <input type="text" placeholder="Search merchbuy"/>
                    </form>
                    </div>
            </div>
            <div className="herosection">
                <h2>Having any <span>issues</span> <br/> with your order? </h2>
                <button className="btn btn-contact">Contact Us</button>
            </div>
            <div className="categoriesgroup">
            <div className="categories">
                <img src="../../img/document.png" alt=""/>
                <p>Product  Categories</p>
            </div>
            <div className="categories img2">
                <img src="../../img/document.png" alt=""/>
                <p>Popular  Products</p>
            </div>
            <div className="categories img3">
                <img src="../../img/document.png" alt=""/>
                <p>Recommended  Products</p>
            </div>
            <div className="categories img4">
                <img src="../../img/document.png" alt=""/>
                <p>Shops</p>
            </div>
        </div>
            <div className="productlist">
            <div className="productitem">
                <img src="../../img/shoe.png" alt="" />
                <p>Free sample small tote bag gucci fen...</p>
                <h3>₦900 - ₦1,500</h3>
                <p>MOQ 4 (pieces)</p>
                </div>
                
                
                <div className="productitem">
                <img src="../../img/shoe.png" alt="" />
                <p>Free sample small tote bag gucci fen...</p>
                <h3>₦900 - ₦1,500</h3>
                <p>MOQ 4 (pieces)</p>
                </div>
                <div className="productitem">
                <img src="../../img/shoe.png" alt="" />
                <p>Free sample small tote bag gucci fen...</p>
                <h3>₦900 - ₦1,500</h3>
                <p>MOQ 4 (pieces)</p>
            </div>
        </div>        
        </div>
    )
}

export default HomeScreen
