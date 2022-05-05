import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Table_Product from './Table_Product';

class Product extends Component {
    
    
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
                                    <h3>Sản Phẩm</h3>
                                    <p className="text-subtitle text-muted">Danh sách các sản phẩm có mặt trên hệ thống</p>
                                </div>
                                <div className="col-12 col-md-6 order-md-2 order-first">
                                    <nav aria-label="breadcrumb" className="breadcrumb-header float-start float-lg-end">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Sản Phẩm</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/* Contextual classes start */}
                        <section className="section">
                            <div className="row" id="table-contexual">
                                <div className="col-12">
                                    <div className="card">
                                        <form class="row">
                                            <div className="col-md-9 col-lg-9 my-3 ps-5">
                                                <div className="input-group mb-3">
                                                  <span className="input-group-text" id="basic-addon1"><i className="bi bi-search" /></span>
                                                  <input type="text" className="form-control" placeholder="Tìm sách bạn cần..." aria-label="Tìm sách" aria-describedby="button-addon2" />
                                                  <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Tìm Kiếm</button>
                                                  <div className="dropdown mx-5">
                                                        <button className="btn btn-outline-dark btn-light dropdown-toggle" type="button" id="dropdownCatagory" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Tìm theo danh mục
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownCatagory">
                                                            <li><a className="dropdown-item" href="#"><i class="bi bi-sort-alpha-down"></i>Từ A đến Z</a></li>
                                                            <li><a className="dropdown-item" href="#"><i class="bi bi-sort-alpha-down-alt">Từ Z đến A</i></a></li>
                                                            
                                                        </ul>
                                                    </div>
                                                  <div className="dropdown">
                                                        <button className="btn btn-outline-dark btn-light dropdown-toggle" type="button" id="dropdownFilter" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-funnel"></i>
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownFilter">
                                                            <li><a className="dropdown-item" href="#"><i class="bi bi-sort-alpha-down"></i>Từ A đến Z</a></li>
                                                            <li><a className="dropdown-item" href="#"><i class="bi bi-sort-alpha-down-alt">Từ Z đến A</i></a></li>
                                                            
                                                        </ul>
                                                    </div>

                                                </div>
                                              </div>
                                              <div className="col-md-3 col-lg-3 mt-3 pe-5 float-end">
                                                <Link to="/add-product" className="btn btn-primary rounded-pill float-end "><i class="bi bi-plus"></i> Thêm mới</Link>
                                              </div>
                                          </form>
                                          
                                        <div className="card-content">
                                            {/* table contextual / colored */}
                                            <div className="table-responsive">
                                                <Table_Product />
                                                  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Contextual classes end */}
                    </div>
                </div>
                </div>
        );
    }
}

export default Product;