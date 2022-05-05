import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
class Nav extends Component {
    render() {
        return (
            
            <div id="sidebar" className="active">
                <div className="sidebar-wrapper active">
                    <div className="sidebar-header">
                        <div className="d-flex justify-content-between">
                            <div className="logo">
                                <a href="index.html"><img src="assets/images/logo/logo.png" alt="Logo" srcSet /></a>
                            </div>
                            <div className="toggler">
                                <a href="" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <ul className="menu">
                            <li className="sidebar-title">Menu</li>
                            <li className="sidebar-item">
                                <Link to="/" className="sidebar-link">
                                    <i className="bi bi-grid-fill" />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="/product" activeClassName="active" className="sidebar-link" >
                                    <i className="bi bi-stack" />
                                    <span>Sản Phẩm</span>
                                </NavLink>
                                
                            </li>
                            
                        </ul>
                    </div>
                    <button className="sidebar-toggler btn x"><i data-feather="x" /></button>
                </div>
            </div>

        );
    }
}

export default Nav;