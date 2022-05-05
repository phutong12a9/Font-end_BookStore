import React, { Component } from 'react';
import '../../../css/style.css';
import '../../../css/footer.css';
import '../../../css/carouselProducts.css';
import Footer from './footer/Footer';
import Nav from './nav/Nav';
import Categories from './index/categories/Categories';
import Carousel_product from './index/carousel-product/Carousel_product';
import Book_SGK from './index/products/sgk_l/Book_SGK';
import Book_SKH from './index/products/skh_r/Book_SKH';
import Banner_sale from './index/banner/Banner_sale';
import Banner_header from './index/banner/Banner_header';
import Banner_footer from './index/banner/Banner_footer';
class Home extends Component {
    render() {
        return (
            <div>
                <Nav/>
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
                <Footer/>
            </div>
        );
    }
}

export default Home;