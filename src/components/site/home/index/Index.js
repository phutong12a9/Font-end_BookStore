import React, { Component } from 'react';
import Categories from './categories/Categories';
import Carousel_product from './carousel-product/Carousel_product';
import Book_SGK from './products/sgk_l/Book_SGK';
import Book_SKH from './products/skh_r/Book_SKH';
import Banner_sale from './banner/Banner_sale';
import Banner_header from './banner/Banner_header';
import Banner_footer from './banner/Banner_footer';
class Index extends Component {
    render() {
        return (
            <div>
                <Categories />
                <Carousel_product />
                <hr></hr>
                <Banner_header />
                <hr></hr>
                <Book_SGK />
                <hr></hr>
                <Banner_sale />
                <hr></hr>
                <Book_SKH />
                <hr></hr>
                <Banner_footer />
            </div>
        );
    }
}

export default Index;