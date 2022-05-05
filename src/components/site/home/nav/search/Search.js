import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            
                <form className="col-xs-4 col-sm-4 col-md-7 col-lg-7 d-flex">
                        <div className="input-group">
                        <input className="form-control border-end-0 border rounded-pill" type="search" placeholder="Tìm kiếm sách mà bạn mong muốn..." id="example-search-input" />
                        <span className="input-group-append">
                            <button className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill " type="button">
                            <i className="fa fa-search" />
                            </button>
                        </span>
                        </div>
                </form>
            
        );
    }
}

export default Search;