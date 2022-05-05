import React, { Component } from 'react';

class Carousel_product_item extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-3 col-md-3 col-lg-3">
                <a href><img src={this.props.img} alt="" className="img-thumbnail" /></a>
                <a href className="title-book">{this.props.name}</a><br />
                <a href className="author-book link-secondary">{this.props.author}</a><br />
                <div>
                    <span><b className="cost-sale text-warning">{this.props.cost_sale}</b>
                    </span>
                    <span className="cost-book mx-2">
                        <del>{this.props.cost}</del>
                    </span>
                    <span className="percent_sale text-danger">-{this.props.percent}%</span>
                    <span className="float-end"><h3><a href className="fa-solid fa-cart-plus" /></h3></span>
                </div>
            </div>
        );
    }
}

export default Carousel_product_item;