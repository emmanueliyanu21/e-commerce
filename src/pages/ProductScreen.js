import React from 'react'

function ProductScreen() {
    return (
        <div className="product-detail">
            <div className="product-image">
                <img src="../../img/product.png" alt=""/>
            </div>
            <div className="product-details">
                <p>NIKE Huararche 2019</p>
                <h3>Get comfy and comfortable with the new 2019 designer
sneaker for all your events </h3>
                <h4>&#8358;45,000 - &#8358;80,000  </h4>
            </div>
            <div className="product-description">
                <span>Product Description</span>
                <div className="icon">
                    <span class="iconify" data-icon="ic:outline-keyboard-arrow-right"></span>
                </div>
            </div>
            <div className="review">
                <div className="review-header">
                    <span>Review and Ratings</span>
                    <button className="btn">View all</button>
                </div>
                <div className="icons">
                    <span class="iconify iconify-fill" data-icon="ic:baseline-star" data-inline="false"></span>
                    <span class="iconify iconify-fill" data-icon="ic:baseline-star" data-inline="false"></span>
                    <span class="iconify iconify-fill" data-icon="ic:baseline-star" data-inline="false"></span>
                    <span class="iconify iconify-empty" data-icon="ic:baseline-star" data-inline="false"></span>
                    <span class="iconify iconify-empty" data-icon="ic:baseline-star" data-inline="false"></span>
                    <span className="text">3.0</span>
                </div>
                <p>This is the best product I have used in a long while and the
size fits perfectly and I love the colors!!!!!</p>
                <div className="review-name">
                    <img src="../../img/segun_arinze.png" alt="" />
                    <span>Segun Arinze</span>
                </div>
            </div>
            <div className="button-sections">
                <button className="btn btn-cart cart-bk">Add to Cart</button>
                <button className="btn btn-cart wishlist-bk">Wishlist</button>
            </div>
        </div>
    )
}

export default ProductScreen
