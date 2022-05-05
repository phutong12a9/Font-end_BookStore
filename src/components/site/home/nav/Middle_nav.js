import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from './cart/Cart';
import Search from './search/Search';

class Middle_nav extends Component {
    render() {
        return (
            <div className="mid-header container-fluid sticky-top py-0">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container">
                        <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 d-flex">
                            <Link to="/" className="navbar-brand"><img src="../img/logo.png" alt="Logo BookStore" className="w-100 h-auto" /></Link>
                        </div>
                        <Search />
                        <Cart />
                    </div>
                </nav>
            </div>

        );
    }
}

export default Middle_nav;