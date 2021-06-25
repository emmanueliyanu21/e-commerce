import React, { useEffect } from "react";
import Header from '../components/Header.js'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Message from "../components/Message";

function CartScreen({ match, location, history }) {
    
    const productId = match.params.id;

    const qty = location.search ? Number(location.search.split("=")[1]) : 1;

    const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart; 

//   console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/success-page");
  };

    return (
        <div className="cart-body">
            <Header />
            <div className="cart-wrapper">
                    <div className="ul-list">
                        <i className="fas fa-angle-left"></i>
                    </div>
                    <div className="ul-list">
                        <h3>Cart</h3>
                    </div>
            </div>
            {cartItems.length === 0 ? (
                <Message>
                    Your Cart is empty <Link to="/">Go Back</Link>
                </Message>
            ) : (
                    <div className="cart">
                        {cartItems.map(item => {
                            <div className="cart-list-wrapper" key={item.product}>
                <div className="cart-list">
                    <div className="cart-list-image">
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        {/* <p>N18,099.09</p> */}
                    </div>
                    <div className="cart-list-icon">
                        <div className="delete-section" onClick={() => removeFromCartHandler(item.product)}>
                            <span className="iconify" data-icon="ic:baseline-delete" data-inline="false"></span>
                            <span>Delete</span>
                        </div>
                        <div className="adjust-section">
                            <i class="fas fa-minus"></i>
                            <span>24</span>
                            <i class="fas fa-plus"></i>
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
                                        <span className="number">&#8358;{
                                            cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)
                                        }</span>
                </div>
                <Link onClick={checkoutHandler} disabled={cartItems.length === 0} className="btn btn-checkout">Checkout</Link>
            </div>
            </div>
                        })}

                        
           
            
                    </div>
            )}
            
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
