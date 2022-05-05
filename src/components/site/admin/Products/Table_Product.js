import React, { Component } from 'react';

class Table_Product extends Component {
    render() {
        return (
            <table className="table table-hover mb-0" id="tableProduct">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Danh Mục</th>
                        <th>Tên Sách</th>
                        <th>Tác Giả</th>
                        <th>NXB</th>
                        <th>Số Trang</th>
                        <th>Ảnh Bìa</th>
                        <th>Tóm Tắt</th>
                        <th>Giá</th>
                        <th>Giá Sale</th>
                        <th>Kho</th>
                        <th>Tác Vụ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-bold-500">1</td>
                        <td>Truyện Tranh</td>
                        <td className="text-bold-500">Trạng Tí</td>
                        <td>Hirowashi</td>
                        <td>Kim Đồng</td>
                        <td>202</td>
                        <td></td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero facere modi quas, ipsum dolor asperiores eum explicabo harum optio qui doloribus animi eveniet molestiae vel, recusandae hic iusto nostrum dicta.</td>
                        <td>68000</td>
                        <td>60000</td>
                        <td>49</td>
                        <td>
                            <a href="" type="button" className="btn btn-info"><i class="bi bi-pencil-square"></i></a>
                            <a href="" type="button" className="btn btn-danger"><i class="bi bi-trash-fill"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table_Product;