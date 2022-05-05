import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
                <div className="cart col-xs-4 col-sm-4 col-md-3 col-lg-3">
                        <a href className="nav-item nav-link float-end">
                        <div className="heading heading-custom">
                            <i className="fa-solid fa-cart-shopping" /> Giỏ hàng
                        </div>
                        </a>
                </div>
        );
    }
}

export default Cart;