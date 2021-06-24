import React from 'react'
import { Link } from 'react-router-dom'
import products from '../products'
import Rating from '../components/Rating'

const ProductScreen = ({match}) => {
    const product = products.find((p) => p._id === match.params.id)
    console.log(product);
    return (
        <div className="product-detail">
            <div className="product-image">
                <img src={product.image} alt={product.name}/>
            </div>
            <div className="product-details">
                <p>{product.name}</p>
                <h3>{product.description}</h3>
                <h4>&#8358;{product.price}  </h4>
            </div>
            <div className="product-description">
                <span>Product Description</span>
                <div className="icon">
                    <span className="iconify" data-icon="ic:outline-keyboard-arrow-right"></span>
                </div>
            </div>
            <div className="review">
                <div className="review-header">
                    <span>Review and Ratings</span>
                    <button className="btn">View all</button>
                </div>
                <div className="icons">
                    <Rating value={product.rating} text={`${product.numReviews}`} />
                    {/* <span className="iconify iconify-fill" data-icon="ic:baseline-star" data-inline="false"></span>
                    <span className="iconify iconify-fill" data-icon="ic:baseline-star" data-inline="false"></span>
                    <span className="iconify iconify-fill" data-icon="ic:baseline-star" data-inline="false"></span>
                    <span className="iconify iconify-empty" data-icon="ic:baseline-star" data-inline="false"></span>
                    <span className="iconify iconify-empty" data-icon="ic:baseline-star" data-inline="false"></span>
                    <span className="text">3.0</span> */}
                </div>
                <p>This is the best product I have used in a long while and the
size fits perfectly and I love the colors!!!!!</p>
                <div className="review-name">
                    <img src="../../img/segun_arinze.png" alt="" />
                    <span>Segun Arinze</span>
                </div>
            </div>
            <div className="button-sections">
                <Link to="/"  className="btn btn-cart cart-bk">Add to Cart</Link>
                <Link to="/" className="btn btn-cart wishlist-bk">Wishlist</Link>
            </div>
        </div>
    )
}

export default ProductScreen
