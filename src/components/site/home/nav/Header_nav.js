import React, { Component } from 'react';

class Header_nav extends Component {
    render() {
        return (

            <div className="header container-fluid py-3">
                <nav className="navbar navbar-expand-lg navbar-light justify-content-end">
                    <a href className="nav-item nav-link mx-1"><i className="fa-solid fa-box-open" /> Kiểm tra đơn hàng</a>
                    <a href className="nav-item nav-link mx-1"><i className="fa-solid fa-arrow-right-to-bracket"> </i>Đăng nhập</a>
                    <a href className="nav-item nav-link mx-1"><i className="fa-solid fa-user-plus" /> Đăng ký</a>
                </nav>
            </div>
        );
    }
}

export default Header_nav;