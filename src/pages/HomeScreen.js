import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product.js'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import Search from '../components/Search.js'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message';
import Loader from '../components/Loader';
// import { Link } from 'react-router-dom'


function HomeScreen() {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products} = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    // const products = []

    return (
        <div >
            {loading ? (<h2>
                <Loader />
            </h2>) : error ? (
                    <Message variant="danger">{error}</Message>
                ) :
                <div className="home-wrapper">
                    <div className="header">
                        <Header />
                <h2 className="container">Trollbasket</h2>
                <div className="list-wrapper">
                    <div className="ul-list">
                        <span class="iconify location" data-icon="fluent:location-12-filled" data-inline="false"></span>                    <span>Lagos</span>
                        <i className="fas fa-angle-down"></i>
                    </div>
                    <div className="ul-list line-orders">
                        <i className="iconify package-icon" data-icon="mdi:package" ></i>
                        <span>My Orders</span>
                        <i></i>
                    </div>
                            <div className="ul-list">
                                <span className="red-badge">9</span>
                                <span class="iconify shopping-cart" data-icon="ic:baseline-shopping-cart" data-inline="false"></span>
                                <span>Cart</span>
                        <i></i>
                    </div>
                </div>
                
                <Search />
            </div>
                    <div className="herosection">
                        <div className="herosection-content">
                            <h2>Having any <span>issues</span>  with your order? </h2>
                            <button  className="btn-contact">Contact Us</button>
                        </div>
                    </div>
            <div className="categoriesgroup">
            <div className="categories">
<span class="iconify img1 cat-icon" data-icon="teenyicons:text-document-solid" data-inline="false"></span>                <p>Product  Categories</p>
            </div>
            <div className="categories">
<span class="iconify img2 cat-icon" data-icon="icomoon-free:fire" data-inline="false"></span>                <p>Popular  Products</p>
            </div>
            <div className="categories">
<span class="iconify img3 cat-icon" data-icon="fa-regular:hand-point-right" data-inline="false"></span>                <p>Recommended  Products</p>
            </div>
            <div className="categories">
<span class="iconify img4 cat-icon" data-icon="entypo:shop" data-inline="false"></span>                <p>Shops</p>
            </div>
            </div>
            
            <div className="productlist">
                {products.map(product => (
                    <div key={product._id} className="productitem">
                        <Product product={product} />
                </div>
                ))}
            </div>
            </div>
            }
            
            <Footer />
        </div>
    )
}

export default HomeScreen
