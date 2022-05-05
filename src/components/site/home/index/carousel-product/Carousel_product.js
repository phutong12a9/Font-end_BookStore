import React, { Component } from 'react';
import Carousel_product_item from './Carousel_product_item';

class Carousel_product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "SGK": [
                {
                    "img": "http://placehold.it/350x260",
                    "name": "Những loài chim biển",
                    "author": "Phú Tống",
                    "cost_sale": "53000",
                    "cost": "70000"
                },
                {
                    "img": "http://placehold.it/350x260",
                    "name": "Những loài chim thiên nga",
                    "author": "Phú Tống",
                    "cost_sale": "53000",
                    "cost": "70000"
                },
                {
                    "img": "http://placehold.it/350x260",
                    "name": "Những loài chim biển",
                    "author": "Phú Tống",
                    "cost_sale": "53000",
                    "cost": "70000"
                },
                {
                    "img": "http://placehold.it/350x260",
                    "name": "Những loài chim biển",
                    "author": "Phú Tống",
                    "cost_sale": "53000",
                    "cost": "7000000"
                }
            ]
        }

    }
    formatMoney = (n)=>{
        return  (Math.round(n * 100) / 100).toLocaleString() + "đ";
    }
    render() {
        var SGK = this.state.SGK.map((value, index) => {
            var percent_sale = ((value.cost-value.cost_sale)/value.cost*100).toFixed();
            return <Carousel_product_item
                        img={value.img}
                        name={value.name}
                        author={value.author}
                        cost_sale={this.formatMoney(value.cost_sale)}
                        cost={this.formatMoney(value.cost)}
                        percent = {percent_sale}
                    />
        });
        return (
            <div className="container mt-5">
                <div className="row">
                    <div id="carouselProducts" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    {SGK}    
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="row">
                                    {SGK}    
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="row">
                                    {SGK}    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel_product;