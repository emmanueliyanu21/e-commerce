import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.js'
// import products from '../products'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = ({match}) => {
    // const product = products.find((p) => p._id === match.params.id)
    const [product, setProduct] = useState([])

     useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`);
            setProduct(data)
        }
        fetchProduct()
     }, [match])
    
    // console.log(product);
    return (
        <>
            <Header />
            <div className="product-wrapper">
                    <div className="ul-list">
                        <i className="fas fa-angle-left"></i>
                    </div>
                    <div className="ul-list">
                        <h3>Details</h3>
                    </div>
                <div className="ul-list">
                        <span className="red-badge">9</span>
                        <span class="iconify shopping-cart" data-icon="ic:baseline-shopping-cart" data-inline="false"></span>
                    </div>
            </div>
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
                <Link to="/cart" className="btn btn-cart wishlist-bk">Wishlist</Link>
            </div>
            </div>
            </>
    )
}

export default ProductScreen
