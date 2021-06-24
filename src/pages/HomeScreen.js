import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product.js'
import Footer from '../components/Footer.js'
import { listProducts } from '../actions/productActions'


function HomeScreen() {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products} = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    // const products = []

    return (
        <>
            {loading ? (<h2>Loading...</h2>) : error ? (<h3>{error}</h3>) : 
                <div>
                    <div className="header">
                <h2>Trollbasket</h2>
                <div className="list-wrapper">
                    <div className="ul-list">
                    <span className="iconify" data-icon="ant-design:shopping-cart-outlined" ></span>
                    <span>Lagos</span>
                    <i className="fas fa-angle-down"></i>
                </div>
                    <div className="ul-list">
                    <i className="iconify" data-icon="mdi:package" ></i>
                    <span>My Orders</span>
                    <i></i>
                </div>
                    <div className="ul-list">
                        <span className="iconify" data-icon="ant-design:shopping-cart-outlined" ></span>
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
                {products.map(product => (
                    <div key={product._id} className="productitem">
                        <Product product={product} />
                </div>
                ))}
            </div>
            </div>
            }
            
            <Footer />
        </>
    )
}

export default HomeScreen
