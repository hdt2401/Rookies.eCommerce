import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import productApi from '../../api/productApi'
import moment from 'moment'

const img = "../../../../Rookies.eCommerce/wwwroot/images/"

function Product() {
  const [products, setProducts] = useState()
  const navigate = useNavigate();
  useEffect(() => {
    retrieveProduct()
  }, [])

  const retrieveProduct = () => {
    productApi.getProductList()
      .then((res) => {
        console.log(res.data)
        const temp = Array.from(res.data)
        setProducts(temp)
      })
      .catch((e) => {
        console.log(e);
      })
  }

  const handleDelete = (id) => {
    productApi.deleteProduct(id)
      .then((res) => retrieveProduct())
      .catch((e) => {
        console.log(e);
      })
  }
  // console.log(typeof products);
  // console.log(products);
  return (
    <div className='product-page'>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h2>Quản lý sản phẩm</h2>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Hôm nay bạn cần gì?" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Tìm</button>
        </form>
      </div>
      <div className="product-management">
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3'>
          <p className='text-muted fs-4'>Tổng số sản phẩm:</p>
          <button className='d-flex align-items-center btn btn-primary' onClick={() => navigate("../AddProduct")}>
            <span className='d-flex align-items-center justify-content-center me-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </span>
            <span>Thêm sản phẩm</span>
          </button>
        </div>
        <table className='table table-bordered text-center'>
          <thead>
            <tr>
              <th style={{ "width": "5%" }}>ID</th>
              <th style={{ "width": "30%" }}>Ảnh sản phẩm</th>
              <th style={{ "width": "10%" }}>Tên sản phẩm</th>
              <th style={{ "width": "6%" }}>Giá</th>
              <th style={{ "width": "6%" }}>Số lượng</th>
              <th style={{ "width": "10%" }}>Ngày tạo</th>
              <th style={{ "width": "10%" }}>Ngày cập nhật</th>
              <th style={{ "width": "11%" }}>Tùy chỉnh</th>
            </tr>
          </thead>
          <tbody>
            {
              (products || []).map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>
                    <img style={{ "width": "100%" }} src={`https://localhost:7276/api/product/${item.id}/image`} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{moment(item.createdDate).format("DD-MM-YY HH:MM:SS")}</td>
                  <td>{moment(item.updatedDate).format("DD-MM-YY HH:MM:SS")}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="options">
                      <button type="button" className="btn btn-outline-primary"
                        onClick={
                          () => {
                            const confirm = window.confirm("Bạn có muốn xóa sản phẩm không?")
                            if (confirm) {
                              handleDelete(item.id)
                            }
                          }
                        }
                      >Xóa</button>
                      <Link to={`/UpdateProduct/${item.id}`} type="button" className="btn btn-outline-primary">Cập nhật</Link>
                      {/* <button type="button" className="btn btn-outline-primary">Cập nhật</button> */}
                    </div>
                  </td>
                </tr>
              )
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default Product;