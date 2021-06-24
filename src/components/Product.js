import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product}) => {
    return (
        <div>
            <div className="productitem">
                <Link to={`/product/${product._id}`}>
                    <img src={product.image} alt="" />
                    <p>{product.name}</p>
                    <h3>&#8358;{product.price}</h3>
                    <p>MOQ 4 (pieces)</p>
                </Link>
            </div>
        </div>
    )
}

export default Product
