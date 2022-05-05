import React, { Component } from 'react';
import Carousel from './Carousel';

class Categories extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="course  col-lg-3">
                    <nav className="navbar navbar-expand-lg navbar-light">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="list-group list-group-flush">
                            <h4 className="course-product p-2"><i className="fa-solid fa-list" /> Danh Mục Sản Phẩm</h4>
                            <li className="list-group-item"><a href>Sách Khoa Học</a> <i className="fa-solid fa-angle-right float-end" /></li>
                            <li className="list-group-item"><a href>Sách Giáo Dục</a> <i className="fa-solid fa-angle-right float-end" /></li>
                            <li className="list-group-item"><a href>Sách Kỹ Năng Sống</a>  <i className="fa-solid fa-angle-right float-end" /></li>
                            <li className="list-group-item"><a href>Sách Ngoại Ngữ</a>  <i className="fa-solid fa-angle-right float-end" /></li>
                            <li className="list-group-item"><a href>Truyện Cổ Tích</a>  <i className="fa-solid fa-angle-right float-end" /></li>
                            <li className="list-group-item"><a href>Truyện Tranh</a>  <i className="fa-solid fa-angle-right float-end" /></li>
                        </ul>
                        </div>
                    </nav>
                    </div>
                    <Carousel />
                </div>
                </div>

        );
    }
}

export default Categories;