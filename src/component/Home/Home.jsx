import React from "react";

import './Home.css'

const Home = () => {
    return (
        <div className="container">
            <div className="home-container">
                <div className="cart-container">
                    <div className="cart">
                        <div className="cart-image">
                            <img src="./Asset/Rectangle 2-2.png" alt="" />
                        </div>
                        <h1 className="header">Introduction to C Programming</h1>
                        <p className="cart-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <div className="cart-price">
                            <p>Price: 100usd</p>
                            <p>Credit : 1hr</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;