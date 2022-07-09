import React from 'react'

export default function index() {
  return (
    <div className='user-page'>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h2>Quản lý người dùng</h2>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Hôm nay bạn cần gì?" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            Tìm
          </button>
        </form>
      </div>
      <div className="brand-management">
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên thương hiệu</th>
              <th>Ngày tạo</th>
              <th>Ngày cập nhật</th>
              <th>Tùy chỉnh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>Tên tdương hiệu</td>
              <td>Ngày tạo</td>
              <td>Ngày cập nhật</td>
              <td>
                <div className="btn-group" role="group" aria-label="options">
                  <button type="button" className="btn btn-outline-primary">Xóa</button>
                  <button type="button" className="btn btn-outline-primary">Cập nhật</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='page-navigation d-flex justify-content-center'>
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
