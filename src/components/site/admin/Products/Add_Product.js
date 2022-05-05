import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Form_Add_Product from './Form_Add_Product';

class Add_Product extends Component {
    render() {
        return (
            <div><Nav/>
            <div id="main">
                    <header className="mb-3">
                        <a href="#" className="burger-btn d-block d-xl-none">
                            <i className="bi bi-justify fs-3" />
                        </a>
                    </header>
                    <div className="page-heading">
                        <div className="page-title">
                            <div className="row">
                                <div className="col-12 col-md-6 order-md-1 order-last">
                                    <h3>Thêm Sản Phẩm</h3>
                                    <p className="text-subtitle text-muted">Thêm mới sản phẩm vào hệ thống.</p>
                                </div>
                                <div className="col-12 col-md-6 order-md-2 order-first">
                                    <nav aria-label="breadcrumb" className="breadcrumb-header float-start float-lg-end">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Thêm Sản Phẩm</li>
                                            
                                        </ol>
                                        <Link to="/product" className="float-end"><i className="bi bi-arrow-90deg-left"></i>Trở về trang trước</Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <Form_Add_Product />
                    </div>
                </div>
                </div>
        );
    }
}

export default Add_Product;