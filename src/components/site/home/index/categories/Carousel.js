import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-interval={1}>
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./img/SachThieuNhi.jpg" className="d-block w-100 " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/Sachhaytrongtuan.jpg" className="d-block w-100 " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/truyentranh.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/Nguyen_Nhat_Anh__890x396.jpg" className="d-block w-100" alt="..." />
                        </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    </div>
        );
    }
}

export default Carousel;