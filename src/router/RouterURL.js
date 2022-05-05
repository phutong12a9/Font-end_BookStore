import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Index from '../components/site/admin/Index';
import Product from '../components/site/admin/Products/Product';
import Add_Product from '../components/site/admin/Products/Add_Product';
import Checkout from '../components/site/home/checkout/Checkout';
import Home from '../components/site/home/Home';

class RouterURL extends Component {
    render() {
        return (
                <div>
                    <Routes>
                        {/* site home */}
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/checkout" element={<Checkout />} />

                        {/* site admin */}
                        <Route exact path='/admin' element={<Index/>}></Route>
                        <Route exact path='/product' element={<Product/>}></Route>
                        <Route exact path='/add-product' element={<Add_Product />}></Route>
                    </Routes>
                    
                </div>
            
            
        );
    }
}

export default RouterURL;