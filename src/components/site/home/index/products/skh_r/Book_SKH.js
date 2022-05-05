import React, { Component } from 'react';
import Book_SKH_Item from './Book_SKH_Item';

class Book_SKH extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
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
                    "cost": "70000"
                }
            ]
        }

    }
    formatMoney = (n)=>{
        return  (Math.round(n * 100) / 100).toLocaleString() + "đ";
    }
    render() {
        var Product = this.state.data.map((value, index) => {
            var percent_sale = ((value.cost-value.cost_sale)/value.cost*100).toFixed();
            return <Book_SKH_Item
                        img={value.img}
                        name={value.name}
                        author={value.author}
                        cost_sale={this.formatMoney(value.cost_sale)}
                        cost={this.formatMoney(value.cost)}
                        percent = {percent_sale}
                    />
        });
        return (
            <div className="product container mt-5">
                <div className="row">
                    <div className="title-product"><h4>Sách Khoa Học</h4></div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                    <div className="row">
                        {Product}
                    </div>
                    <div className="my-3">
                        <center><a href="" className="see-more" >Xem Thêm</a></center>
                    </div>
                    </div>
                    <div className="logo-product col-lg-3 pt-3">
                    <a href><img src="../img/b54e398a-5dc0-43fb-9e82-80e2861d0871.jpg" alt="" className="img-thumbnail" /></a>
                    </div>
                </div>
                </div>

        );
    }
}

export default Book_SKH;