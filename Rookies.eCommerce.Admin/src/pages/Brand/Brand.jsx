import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import brandApi from '../../api/brandApi'

function Brand() {
  const [brands, setBrands] = useState()

  useEffect(() => {
    retrieveBrands()
  }, [])

  const retrieveBrands = () => {
    brandApi.getBrandList()
      .then((res) => {
        console.log(res.data)
        const temp = Array.from(res.data)
        setBrands(temp)
      })
      .catch((e) => {
        console.log(e);
      })
  }

  const handleDelete = (id) => {
    brandApi.deleteBrand(id)
      .then((res) => retrieveBrands())
      .catch((e) => {
        console.log(e);
      })
  }

  return (
    <div className='brand-page'>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h2>Quản lý thương hiệu</h2>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Hôm nay bạn cần gì?" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Tìm</button>
        </form>
      </div>
      <div className="brand-management">
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3'>
          <p className='text-muted'>Tổng số thương hiệu:</p>
          <Link className='d-flex align-items-center btn btn-primary' to="AddBrand">
            <span className='d-flex align-items-center justify-content-center me-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </span>
            <span>Thêm thương hiệu</span>
          </Link>
        </div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên thương hiệu</th>
              {/* <th>Ngày tạo</th>
              <th>Ngày cập nhật</th> */}
              <th>Tùy chỉnh</th>
            </tr>
          </thead>
          <tbody>
            {
              (brands || []).map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  {/* <td>{item.createdDate}</td>
                  <td>{item.updatedate}</td> */}
                  <td>
                    <div className="btn-group" role="group" aria-label="options">
                      <button type="button" className="btn btn-outline-primary"
                        onClick={
                          () => {
                            const confirm = window.confirm("Bạn có muốn xóa không?")
                            if (confirm) {
                              handleDelete(item.id)
                            }
                          }
                        }
                      >Xóa</button>
                      <Link to={`/UpdateBrand/${item.id}`} type="button" className="btn btn-outline-primary">Cập nhật</Link>
                    </div>
                  </td>
                </tr>
              ))
            }

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
export default Brand