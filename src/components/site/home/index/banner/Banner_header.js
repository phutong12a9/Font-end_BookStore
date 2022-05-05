import React, { Component } from 'react';

class Banner_info extends Component {
    render() {
        return (
            <div className="banner-header container mt-5">
                <div className="row">
                    <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                        <div className="img-banner-info"><img src="../img/banner/chinhhang.png" alt="" className="img-fluid" /></div>
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                        <div className="img-banner-info"><img src="../img/banner/mienphivanchuyen.png" alt="" className="img-fluid" /></div>
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                        <div className="img-banner-info"><img src="../img/banner/giaohang24h.png" alt="" className="img-fluid" /></div>
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                        <div className="img-banner-info"><img src="../img/banner/baohanh.png" alt="" className="img-fluid" /></div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Banner_info;