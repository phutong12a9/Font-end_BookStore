import React, { Component } from 'react';

class Banner_footer extends Component {
    render() {
        return (
            <div className=" banner-footer container mt-5">
                <div className="row">
                    <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10 d-flex">
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <img src="../img/banner/camketchinhhang.jpg" className="img-fluid" />
                        </div>
                        <div className="banner-footer col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <img src="../img/banner/tragop.jpg" className="img-fluid" />
                        </div>
                        <div className="banner-footer col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <img src="../img/banner/dathangonline.jpg" className="img-fluid" />
                        </div>
                        <div className="banner-footer col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <img src="../img/banner/giaohangmienphi.jpg" className="img-fluid" />
                        </div>
                        <div className="banner-footer col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <img src="../img/banner/doitratannha.jpg" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Banner_footer;