import React, { Component } from 'react';

class Form_Add_Product extends Component {
    render() {
        return (
            <section id="multiple-column-form">
            <div className="row match-height">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Multiple Column</h4>
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <form className="form">
                        <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label htmlFor="categoryBook">Danh Mục</label>
                              <select className="form-control" name="categoryBook" id="categoryBook" required>
                                <option value="">Chọn danh mục...</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12 col-12">
                            <div className="form-group">
                              <label htmlFor="nameBook">Tên Sách</label>
                              <input type="text" id="nameBook" className="form-control" placeholder="Nhập tên sách ..." name="nameBook" required/>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label htmlFor="authorBook">Tác Giả</label>
                              <input type="text" id="authorBook" className="form-control" placeholder="Nhập tên tác giả ..." name="authorBook" required/>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label htmlFor="publishBook">Nhà Xuất Bản</label>
                              <input type="text" id="publishBook" className="form-control" placeholder="Nhập nhà sản xuất ..." name="publishBook" required />
                            </div>
                          </div>
                          <div className="col-md-3 col-12">
                            <div className="form-group">
                              <label htmlFor="pageBook">Số Trang</label>
                              <input type="text" id="pageBook" className="form-control" name="pageBook" placeholder="Nhập số trang sách ..." required/>
                            </div>
                          </div>
                          <div className="col-md-3 col-12">
                            <div className="form-group">
                              <label htmlFor="costBook">Giá</label>
                              <input type="number" id="costBook" className="form-control" name="costBook" placeholder="Nhập giá sách ..." required/>
                            </div>
                          </div>
                          <div className="col-md-3 col-12">
                            <div className="form-group">
                              <label htmlFor="saleBook">Giá Giảm</label>
                              <input type="number" id="saleBook" className="form-control" name="saleBook" placeholder="Nhập giá giảm sách ..." />
                            </div>
                          </div>
                          <div className="col-md-3 col-12">
                            <div className="form-group">
                              <label htmlFor="storageBook">Kho</label>
                              <input type="number" id="storageBook" className="form-control" name="storageBook" placeholder="Nhập số lượng trong kho ..." />
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="form-group">
                              <label htmlFor="imgBook">Hình Ảnh</label>
                              <input type="file" className="form-control" id="imgBook" name="imgBook" required/>
                            </div>
                          </div>
                          <div className="col-md-12 col-12">
                            <div className="form-group">
                              <label htmlFor="summaryBook">Sơ Lược</label>
                              <textarea class="form-control ps-3 pt-3" id="summaryBook" rows="6" name="summaryBook"></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 col-12">
                            <div className="form-group">
                              <label htmlFor="contentBook">Nội Dung</label>
                              <textarea class="form-control ps-3 pt-3" id="contentBook" rows="6" name="contentBook"></textarea>
                            </div>
                          </div>
                          <div className="col-12 d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary me-1 mb-1">Thêm</button>
                            <button type="reset" className="btn btn-light-secondary me-1 mb-1">Trở về</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>          
        );
    }
}

export default Form_Add_Product;