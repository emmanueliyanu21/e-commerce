import React from 'react'

function CartScreen() {
    return (
        <div>
            <div className="cart-list-wrapper">
                <div className="cart-list">
                    <div className="cart-list-image">
                        <img src="../../img/product2.png" alt="" />
                        <p>2019 Vintage Coca Cola</p>
                    </div>
                    <div className="cart-list-icon">
                        <div className="delete-section">
                            <i class="iconify" data-icon="ic:baseline-delete" data-inline="false"></i>
                            <span>Delete</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-list-wrapper">
                <div className="cart-list">
                    <div className="cart-list-image">
                        <img src="../../img/product1.png" alt="" />
                        <p>2019 Vintage Coca Cola</p>
                    </div>
                    <div className="cart-list-icon">
                        <div className="delete-section">
                            <i class="iconify" data-icon="ic:baseline-delete" data-inline="false"></i>
                            <span>Delete</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-sub-total">
                <div className="total">
                    <div>Subtotal</div>
                    <div>&#8358;18,099.09</div>
                </div>
                <div className="total">
                    <span>Total</span>
                    <span className="number">&#8358;18,099.09</span>
                </div>
                <button className="btn btn-checkout">Checkout</button>
            </div>
            <div className="product-cart-list">
                <div className="review-header">
                    <span>Review and Ratings</span>
                    <button className="btn">View all</button>
                </div>
                <div className="product-list">
                <div className="productitem">
                    <img src="../../img/product1.png" alt="" />
                    <p>Free sample small tote bag gucci fen...</p>
                    <h3>₦900 - ₦1,500</h3>
                    <p>MOQ 4 (pieces)</p>
                </div>
                    <div className="productitem">
                    <img src="../../img/product2.png" alt="" />
                    <p>Free sample small tote bag gucci fen...</p>
                    <h3>₦900 - ₦1,500</h3>
                    <p>MOQ 4 (pieces)</p>
                </div>
                    <div className="productitem">
                    <img src="../../img/product3.jpg" alt="" />
                    <p>Free sample small tote bag gucci fen...</p>
                    <h3>₦900 - ₦1,500</h3>
                    <p>MOQ 4 (pieces)</p>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default CartScreen
